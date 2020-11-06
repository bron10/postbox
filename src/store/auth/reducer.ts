
import {
    ActionTypes,
    LOGIN_SUCCESS,
    SIGNOUT_SUCCESS
  } from './types';

  /**
   * Temporary mock data to maintain app session
   */
  function checkLocalStorage(){
    let user = {};
    try{
      user = JSON.parse(localStorage.currentUser)
    }catch(e){}
    return user;
  }
  
  const initialState = {
    currentUser :  checkLocalStorage()
  }
  
  export function authReducer(
    state = initialState,
    action: ActionTypes
  ): any {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {...state, ...{currentUser : action.currentUser}}
      
      case SIGNOUT_SUCCESS:
        return {...state, ...{currentUser : {}}}
      default:
        return state
    }
  }