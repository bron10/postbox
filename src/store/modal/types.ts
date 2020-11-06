export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';

export interface ModalProps {
    type : string,
    header: string,
    className:string,
    open : boolean
}

interface openModalAction {
    type: typeof OPEN_MODAL,
    data : ModalProps,
}

interface closeModalAction {
    type: typeof CLOSE_MODAL,
    // data : ModalProps,
}



export type ActionTypes = openModalAction | closeModalAction;
