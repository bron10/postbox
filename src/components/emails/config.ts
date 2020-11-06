export const opsList = [{
  title : 'Inbox',
  type : 'inbox'
},{
  title : 'Send email',
  type : 'send'
}];

export const emailListFirstColumn:any = {
  "inbox":{
    title: 'From',
    dataIndex: 'sender',
    key : 'sender'
  },
  "send":{
    title: 'To',
    dataIndex: 'to',
    key : 'to'
  }
};
export const emailListColumns = [
  {
    title: 'subject',
    dataIndex: 'subject',
    key : 'subject'
  },
  {
    title: 'date',
    dataIndex: 'created_at',
    key : 'created_at'
  },
]
export const composeEmailTxt = 'Compose Mail';