
import {
    ActionTypes,
    GET_EMAILS_SUCCESS,
    SEND_EMAIL_SUCCESS,
    RESET_OPERATIONS
  } from './types'
  import {formatEmailData, getUnreadCount} from '../../services/helper';
  const initialState = {
    emails : [],
    unreadCount : 0
  }
  
  export function emailReducer(
    state = initialState,
    action: ActionTypes
  ): any {
    switch (action.type) {
      case GET_EMAILS_SUCCESS:
        const emails = formatEmailData(action.emails);
        console.log("emails", emails);
        return {...state, ...{
          emails : [...formatEmailData(action.emails)],
          unreadCount : getUnreadCount(action.emails)
        }}
      case SEND_EMAIL_SUCCESS:
        const data = {...state, ...{successMessage : action.message}}; 
        return data
      default:
        return state
    }
  }