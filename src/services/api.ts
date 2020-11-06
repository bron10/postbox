import { isJSDocPublicTag } from 'typescript';
import {Credentials, Email, EmailCreation, User} from '../types'
import {includes} from 'lodash';
export async function getAccountEmails(email:string, emailAction?:string){
  let emails =  localStorage.getItem('emails');
  if(emails && emails.length){
    const parsedEmails = JSON.parse(emails);
    console.log("emailAction", emailAction);
    switch(emailAction){
      case 'send':
        return parsedEmails.filter(({sender}: any) => email === sender);
      default:
        return parsedEmails.filter(({to}: any) =>  includes(to, email));
    }
  }
  return [];
}

export async function sendAccountEmail(email: EmailCreation){
  let emails =  localStorage.getItem('emails');
  console.log("ermead", emails)
  if(emails && emails.length){
    const parsedEmails = JSON.parse(emails);
    if(parsedEmails.length){
      let emailUuid = parsedEmails[0] ? (parsedEmails[0].emailUuid + 1) : 1234;
      parsedEmails.unshift({...email, read: false, created_at : Date.now(), emailUuid : emailUuid})
    }
    localStorage.emails = JSON.stringify(parsedEmails);
    return {
      message : "Email send successfully",
      emails
    };
    // return emails.filter(({to}:any) => to === emails)
  }
  return [];
}

export async function login(credentials: Credentials){
  let users =  localStorage.getItem('users');
  if(users && users.length){
    const parsedUsers = JSON.parse(users);
    if(users.length){
      const selectedUser = parsedUsers.find(({email, password}: User) => credentials.email === email && credentials.password === password)
      if(selectedUser){
        localStorage.currentUser = JSON.stringify(selectedUser);    
        return Promise.resolve(selectedUser);    
      }
    }
  }

  return Promise.reject({
    message : 'User not found'
  })
}

export async function signout(currentUser: User){
  delete localStorage.currentUser;
  return {message : "Logout successfully"};  
}

export async function deleteEmails(uuids : string[]){
  let emails =  localStorage.getItem('emails');
  if(emails && emails.length){
    const parsedEmails = JSON.parse(emails);
    const newList =  parsedEmails.filter(({emailUuid}:any) => !includes(uuids, emailUuid));
    localStorage.emails = JSON.stringify(newList)
    return {
      message : "Deleted email successfully",
      emails : newList
    }
  }
  return Promise.reject({
    message : 'Email not found'
  });
}

export async function setEmailRead(uuid:string){
  let emails =  localStorage.getItem('emails');
  if(emails && emails.length){
    const parsedEmails = JSON.parse(emails);
    const list =  parsedEmails.map(({emailUuid, ...otherInfo}:any) =>  {
      if(emailUuid == uuid){
        otherInfo.read = true;
      }
      return {emailUuid, ...otherInfo};
    });
    localStorage.emails = JSON.stringify(list);
    return {emails : list}
  }
  return Promise.reject({
    message : 'Email not found'
  });
}