import { put, call, take, takeLatest} from 'redux-saga/effects';

import {GET_EMAILS_START} from '../store/emails/types';
import {getEmailsSuccess} from '../store/emails/actions';
import {getAccountEmails} from '../services/api';


function* getEmailUpdates() {
  try{
    const response = yield call(getAccountEmails)
    console.log("response", response);
    yield put(getEmailsSuccess(response)); 
    
  }catch(e){

  }
  
}

export function* watchEmail() {
    yield takeLatest(GET_EMAILS_START, getEmailUpdates)
}


