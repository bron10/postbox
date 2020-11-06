import { RESET_OPERATIONS, SEND_NOTIFICATION , SEND_ERROR_NOTIFICATION,ActionTypes} from './types'

export function notify(message: string): ActionTypes{
  return {
    type : SEND_NOTIFICATION,
    message
  }
}
export function notifyError(message: string): ActionTypes{
  return {
    type : SEND_ERROR_NOTIFICATION,
    message
  }
}

export function reset() : ActionTypes {
  return {
    type : RESET_OPERATIONS,
  }
}