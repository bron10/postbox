
import { CLOSE_MODAL, OPEN_MODAL , ModalProps, ActionTypes} from './types'

  const initialState : any = {
    data : {},
  }
  
  export function modalReducer(
    state = initialState,
    action: ActionTypes
  ): any {
    switch(action.type){
      case OPEN_MODAL:
        return {...state, ...action};
      
      default:
        return {...state, data : {
          open : false  
        }}
    }
  }