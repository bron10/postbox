import { CLOSE_MODAL, OPEN_MODAL , ActionTypes} from './types'

export function openModal() : ActionTypes {
  return {
    type: OPEN_MODAL,
  }
}

export function closeModal() : ActionTypes {
  return {
    type: CLOSE_MODAL,
  }
} 