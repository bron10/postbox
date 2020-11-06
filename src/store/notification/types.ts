export const RESET_OPERATIONS = 'RESET_OPERATIONS';
export const SEND_NOTIFICATION = 'SEND_NOTIFICATION';
export const SEND_ERROR_NOTIFICATION = 'SEND_ERROR_NOTIFICATION';
interface notifyAction {
    type: typeof SEND_NOTIFICATION,
    message : string,
}

interface notifyErrorAction {
    type: typeof SEND_ERROR_NOTIFICATION,
    message : string,
}

interface resetAction {
	type : typeof RESET_OPERATIONS
}

export type ActionTypes = resetAction | notifyAction | notifyErrorAction;
