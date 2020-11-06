import {Email, EmailCreation} from '../../types';
export const GET_EMAILS_SUCCESS = 'GET_EMAILS_SUCCESS'
export const GET_EMAILS_START = 'GET_EMAILS_START'
export const SEND_EMAIL_START = 'SEND_EMAIL_START';
export const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS';
export const RESET_OPERATIONS = 'RESET_OPERATIONS';
export const DELETE_EMAIL = 'DELETE_EMAIL';
export const DELETE_EMAIL_SUCCESS = 'DELETE_EMAIL_SUCCESS';
export const SET_EMAIL_READ = 'SET_EMAIL_READ';

interface getEmailsAction {
		type: typeof GET_EMAILS_START,
		email: string,
		emailAction?:string    
}

interface getEmailsSuccessAction {
	type: typeof GET_EMAILS_SUCCESS,
	emails: Email[]    
}

interface sendEmailAction {
	type : typeof SEND_EMAIL_START,
	payload : EmailCreation 
}

interface sendEmailSuccess {
	type : typeof SEND_EMAIL_SUCCESS,
	message : string 
}

interface resetOperationAction {
	type : typeof RESET_OPERATIONS
}

interface deleteEmail {
	type : typeof DELETE_EMAIL,
	emailUuids : string[]
}

interface deleteEmailSuccess {
	type : typeof DELETE_EMAIL_SUCCESS,
	emails: Email[]    
}

interface setEmailRead {
	type : typeof SET_EMAIL_READ,
	emailUuid : string
}

export type ActionTypes = getEmailsAction | getEmailsSuccessAction | sendEmailAction | sendEmailSuccess | resetOperationAction | deleteEmail | deleteEmailSuccess | setEmailRead;
