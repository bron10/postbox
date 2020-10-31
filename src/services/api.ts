import {Email} from '../types'

export function getAccountEmails(){
  let emails =  localStorage.getItem('emails');
  if(emails && emails.length){
    emails = JSON.parse(emails);
    return emails;
    // return emails.filter(({to}:any) => to === emails)
  }
  return [];
}
