export function formatEmailData(emails:any){
  return emails.map(({
    sender,
    subject,
    created_at,
    to,
    emailUuid,
    read,
    body,
    cc
  }:any, index:number) => {
    return {
      sender_name : sender.name || "",
      sender : sender,
      to : to, 
      subject,
      created_at : getTimeInterval(created_at),
      index,
      emailUuid,
      body,
      cc,
      read,
      readClass : read? 'email-read' : ''
    }
  })
  .sort((current:any, next:any) => next.created_at - current.created_at)
}

export function getUnreadCount(emails: any){
  return emails.filter(({read}:any) => !read).length
}


function getTimeInterval(date:number) {
  let seconds = Math.floor((Date.now() - date) / 1000);
  let unit = "second";
  let direction = "ago";
  if (seconds < 0) {
    seconds = -seconds;
    direction = "from now";
  }
  let value = seconds;
  if (seconds >= 31536000) {
    value = Math.floor(seconds / 31536000);
    unit = "year";
  } else if (seconds >= 86400) {
    value = Math.floor(seconds / 86400);
    unit = "day";
  } else if (seconds >= 3600) {
    value = Math.floor(seconds / 3600);
    unit = "hour";
  } else if (seconds >= 60) {
    value = Math.floor(seconds / 60);
    unit = "minute";
  }
  if (value !== 1)
    unit = unit + "s";
  return value + " " + unit + " " + direction;
}