import { put, call, take, takeLatest} from 'redux-saga/effects';

import {GET_EMAILS_START, SEND_EMAIL_START, DELETE_EMAIL, SET_EMAIL_READ} from '../store/emails/types';
import {getEmailsSuccess, deleteEmailSuccess} from '../store/emails/actions';
import {notify} from '../store/notification/actions';
import {getAccountEmails, sendAccountEmail, deleteEmails, setEmailRead} from '../services/api';
import {EmailCreation} from '../types'

function* getEmailUpdates({email, emailAction}:any) {
  try{
    const response = yield call(getAccountEmails, email, emailAction)
    yield put(getEmailsSuccess(response)); 
    
  }catch(e){

  }  
}

function* sendEmailUpdates({payload}: any){
  try{
    const response = yield call(sendAccountEmail, payload)
    yield put(notify(response.message)); 
  }catch(e){
    // yield put(getError(response));
  }  
}


function* deleteEmailUpdates({emailUuids}: any){
  try{
    const response = yield call(deleteEmails, emailUuids)
    yield put(notify(response.message)); 
    yield put(getEmailsSuccess(response.emails)); 
  }catch(e){
    // yield put(getError(response));
  }  
}

function* setEmailreadUpdates({emailUuid}:any){
  try{
    const response = yield call(setEmailRead, emailUuid)
    yield put(getEmailsSuccess(response.emails)); 
  }catch(e){
    // yield put(getError(response));
  }
}

export function* watchEmail() {
  yield takeLatest(GET_EMAILS_START, getEmailUpdates)
  yield takeLatest(SEND_EMAIL_START, sendEmailUpdates)
  yield takeLatest(DELETE_EMAIL, deleteEmailUpdates)
  yield takeLatest(SET_EMAIL_READ, setEmailreadUpdates)
}


