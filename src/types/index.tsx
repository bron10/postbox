export interface Email {
	to: User,
	cc: string[],
	body: string,
	subject: string,
	read: boolean,
	created_at: string,
	sender:User 
}

export interface User {
	id: number,
	name: string,
	email: string
}

export interface Credentials {
	email: string,
	password: string
}

export interface formattedEmails {
	sender_email : string,
	sender_name : string,
	body: string,
	subject: string,
	read: boolean,
	created_at: string,
}

export interface dashboardProps { 
	emails : formattedEmails[], 
	// isDisconnected : boolean,
	getEmailsUpdate : () => void
};
