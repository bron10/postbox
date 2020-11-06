import {Email, EmailCreation} from '../../types';
import { ActionTypes, GET_EMAILS_START, GET_EMAILS_SUCCESS, SEND_EMAIL_START, SEND_EMAIL_SUCCESS, DELETE_EMAIL, DELETE_EMAIL_SUCCESS, SET_EMAIL_READ } from './types'

export function getEmails(email:string, emailAction?:string): ActionTypes {
  return {
    type: GET_EMAILS_START,
    email,
    emailAction
  }
}

export function getEmailsSuccess(emails : Email[]): ActionTypes {
  return {
    type: GET_EMAILS_SUCCESS,
    emails
  }
}

export function sendEmail(payload : EmailCreation): ActionTypes {
  return {
    type : SEND_EMAIL_START,
    payload
  }
}

export function sendEmailSuccess(message: string): ActionTypes{
  return {
    type : SEND_EMAIL_SUCCESS,
    message
  }
}

export function deleteEmail(emailUuids: string[]): ActionTypes{
  return {
    type : DELETE_EMAIL,
    emailUuids
  }
}

export function deleteEmailSuccess(emails : Email[]) : ActionTypes{
  return {
    type : DELETE_EMAIL_SUCCESS,
    emails
  }
}

export function setEmailRead(emailUuid:string) : ActionTypes{
  return {
    type : SET_EMAIL_READ,
    emailUuid
  }
}