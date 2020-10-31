export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL = 'CLOSE_MODAL'

export interface ModalProps {
    modalProps ?: Object
}

interface openModalAction {
    type: typeof OPEN_MODAL,
}

interface closeModalAction {
    type: typeof CLOSE_MODAL,
}



export type ActionTypes = openModalAction | closeModalAction;
