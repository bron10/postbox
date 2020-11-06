const emails = [{
  cc: ["test@cc.com"],
  body: "dum,y",
  subject: "Letter from Tom",
  read: false,
  created_at: 1604505167994,
  sender: "tom@gmail.com",
  new : true,
  "to": ["jerry@gmail.com"],
  emailUuid : 1601
},{
  cc: ["test@cc.com"],
  body: "Regarding some contract",
  subject: "new subject this is",
  read: true,
  created_at: 1604605167994,
  sender: "jerry@gmail.com",
  new : true,
  "to": ["tom@gmail.com"],
  emailUuid : 1602
},{
  cc: ["test@cc.com"],
  body: "dum,y",
  subject: "New order recieved",
  read: false,
  created_at: 1604705167994,
  sender: "jerry@gmail.com",
  new : true,
  "to": ["jekyl@gmail.com"],
  emailUuid : 1603
},{
  cc: ["test@cc.com"],
  body: "Some text data lorem ipsum",
  subject: "New letter from xyz",
  read: true,
  created_at: 1604505167994,
  sender: "jerry@gmail.com",
  new : true,
  "to": ["tom@gmail.com"],
  emailUuid : 1604
},{
  cc: ["test@cc.com"],
  body: "dum,y",
  subject: "Do you want to join javascript course?",
  read: false,
  created_at: 1604405167994,
  sender: "tom@gmail.com",
  new : true,
  "to": ["jerry@gmail.com"],
  emailUuid : 1605
},{
  cc: ["test@cc.com"],
  body: "Your order is confirmed",
  subject: "new subject this is",
  read: true,
  created_at: 1604305167994,
  sender: "jerry@gmail.com",
  new : true,
  "to": ["tom@gmail.com"],
  emailUuid : 1606
}, {
  cc: ["test@cc.com"],
  body: "Your order is confirmed",
  subject: "yet another one",
  read: true,
  created_at: 1604005167994,
  sender: "newman@gmail.com",
  new : true,
  "to": ["jerry@gmail.com"],
  emailUuid : 1607
}]

const users  = [{
  id: 12,
	name: "Tom",
	email: "tom@gmail.com",
	password : "tom123"
}, {
  id: 13,
	name: "Jerry",
	email: "jerry@gmail.com",
  password : "jerry123",
}]

window.localStorage.users = JSON.stringify(users)

window.localStorage.emails = JSON.stringify(emails)