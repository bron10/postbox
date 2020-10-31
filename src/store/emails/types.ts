export const GET_EMAILS_SUCCESS = 'GET_EMAILS_SUCCESS'
export const GET_EMAILS_START = 'GET_EMAILS_START'
export interface User {
	// id: number,
	name: string,
	email: string
}

export interface Email {
	to: User,
	cc: User[],
	body: string,
	subject: string,
	read: boolean,
	created_at: string,
	sender:User 
}
interface getEmailsAction {
		type: typeof GET_EMAILS_START,
		// email: string    
}

interface getEmailsSuccessAction {
	type: typeof GET_EMAILS_SUCCESS,
	emails: Email[]    
}
export type ActionTypes = getEmailsAction | getEmailsSuccessAction;
