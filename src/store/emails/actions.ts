import { ActionTypes, GET_EMAILS_START, GET_EMAILS_SUCCESS, Email } from './types'

export function getEmails(): ActionTypes {
  return {
    type: GET_EMAILS_START,
  }
}

export function getEmailsSuccess(emails : Email[]): ActionTypes {
  return {
    type: GET_EMAILS_SUCCESS,
    emails
  }
}
