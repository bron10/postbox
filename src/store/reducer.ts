import { combineReducers } from 'redux';
import {emailReducer} from './emails/reducer';
import {modalReducer} from './modal/reducer';
import {notificationReducer} from './notification/reducer';
import {authReducer} from './auth/reducer';

const rootReducer = combineReducers({
    email: emailReducer,
    modal : modalReducer,
    notification : notificationReducer,
    auth: authReducer
    // connection : connectionReducer
})

export default rootReducer;
