export interface EmailCreation {
	to: string[],
	cc: string[],
	body: string,
	subject: string,
	sender:string
}
export interface Email extends EmailCreation {
	read: boolean,
	created_at: string,
}

export interface User {
	id: number,
	name: string,
	email: string,
	password : string
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
	emailUuid : string
}

export interface ParamTypes {
	emailAction: string
	emailUuid?:string
}
