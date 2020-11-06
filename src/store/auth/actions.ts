import {Credentials, EmailCreation, User} from '../../types';
import { ActionTypes, START_LOGIN, LOGIN_SUCCESS, SIGNOUT_SUCCESS, START_SIGNOUT } from './types'

export function signIn(credentials: Credentials): ActionTypes {
  console.log("sign in action")
  return {
    type: START_LOGIN,
    credentials
  }
}

export function signInSuccess(currentUser:User): ActionTypes {
  return {
    type: LOGIN_SUCCESS,
    currentUser
  }
}

export function signOut(currentUser:User) : ActionTypes {
  return {
    type: START_SIGNOUT,
    currentUser
  }  
}

export function signOutSuccess(): ActionTypes {
  return {
    type: SIGNOUT_SUCCESS
  }
}
