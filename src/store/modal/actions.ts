import { CLOSE_MODAL, OPEN_MODAL , ActionTypes, ModalProps} from './types'

export function openModal(modalProps: ModalProps) : ActionTypes {
  return {
    type: OPEN_MODAL,
    data : {...modalProps}
  }
}

export function closeModal() : ActionTypes {
  return {
    type: CLOSE_MODAL,
    // data : {},
  }
} 