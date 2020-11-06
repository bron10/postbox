import {Email, User, Credentials} from '../../types';
export const GET_EMAILS_SUCCESS = 'GET_EMAILS_SUCCESS'
export const START_LOGIN = 'START_LOGIN'
export const LOGIN_SUCCESS = 'START_LOGIN_SUCCESS';
export const LOGIN_ERROR= 'START_LOGIN_ERROR';
export const START_SIGNOUT = 'START_SIGNOUT';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';

interface signInAction {
	type: typeof START_LOGIN,
	credentials : Credentials   
}

interface signInSuccess {
	type: typeof LOGIN_SUCCESS,
	currentUser : User   
}

interface signOutAction {
	type : typeof START_SIGNOUT,
	currentUser : User
}

interface signOutSuccess {
	type : typeof SIGNOUT_SUCCESS,
}

export type ActionTypes = signInAction | signInSuccess | signOutAction | signOutSuccess;
