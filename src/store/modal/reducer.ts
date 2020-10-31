
import { CLOSE_MODAL, OPEN_MODAL , ModalProps, ActionTypes} from './types'

  const initialState : ModalProps = {
    modalProps : {}
  }
  
  export function modalReducer(
    state = initialState,
    action: ActionTypes
  ): any {
    switch (action.type) {
      case CLOSE_MODAL:
        return {...state, ...initialState}
      case OPEN_MODAL:
        return {...state, ...action}
          
      default:
        return state
    }
  }