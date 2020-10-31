import { combineReducers } from 'redux';
import {emailReducer} from './emails/reducer';
import {modalReducer} from './modal/reducer';
// import {connectionReducer} from './connection/reducer';

const rootReducer = combineReducers({
    emails: emailReducer,
    modal : modalReducer
    // connection : connectionReducer
})

export default rootReducer;
