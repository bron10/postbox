
import {
    ActionTypes,
    GET_EMAILS_SUCCESS,
  } from './types'
  import {formatEmailData} from '../../services/helper';
  const initialState : any= []
  
  export function emailReducer(
    state = initialState,
    action: ActionTypes
  ): any {
    switch (action.type) {
      case GET_EMAILS_SUCCESS:
        return [...formatEmailData()(action.emails)]
      
      default:
        return state
    }
  }