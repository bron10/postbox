import {formatEmailData} from './helper';
import {Email} from '../types';
describe('Test function : services/helper => formatEmailData', () => {
  test('check the length of input', () => {
    const emailsList:Email[] = [{
      cc: ["test@cc.com"],
      body: "dum,y",
      subject: "new subject this is",
      read: false,
      created_at: "2020-10-25T17:09:29.467Z",
      sender: {"email":"noreply@gmail.com", "name":"no rply", "id": 13},
      "to": {
      "email" : "bron@gmail.com",
       "name": "bron",
       "id" : 12}
    }]
  
    expect(emailsList.length).toBe(formatEmailData()(emailsList).length)
  })
})