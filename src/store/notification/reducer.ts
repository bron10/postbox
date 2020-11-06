
import { SEND_NOTIFICATION, SEND_ERROR_NOTIFICATION, RESET_OPERATIONS, ActionTypes} from './types'

  const initialState : any = {
    successMessage : "",
    errorMessage : "",
  }
  
  export function notificationReducer(
    state = initialState,
    action: ActionTypes
  ): any {
    switch(action.type){
      case SEND_NOTIFICATION:
        return {...state, ...{successMessage : action.message}};
      
      case SEND_ERROR_NOTIFICATION:
        return {...state, ...{errorMessage : action.message}};
          
      case RESET_OPERATIONS:
        return {...state, ...{successMessage : "", errorMessage : ""}}

      default:
        return state
    }
  }