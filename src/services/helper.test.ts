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
      sender: "noreply@gmail.com",
      to: ["bron@gmail.com"]
    }]
  
    expect(emailsList.length).toBe(formatEmailData(emailsList).length)
  })
})