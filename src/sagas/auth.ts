import { put, call, take, takeLatest} from 'redux-saga/effects';
import {START_LOGIN, START_SIGNOUT} from '../store/auth/types';
import {signInSuccess, signOutSuccess} from '../store/auth/actions';
import {notifyError, notify} from '../store/notification/actions';
import {login, signout} from '../services/api';
import {Credentials, EmailCreation, User} from '../types'
const ANY_ERROR_TEXT = 'Something went wrong, please try again';

function* loginUpdates({credentials}: any) {
  try{
    // console.log("payload", payload);
    const currentUser = yield call(login, credentials)
    console.log("response on login", currentUser);
    yield put(signInSuccess(currentUser));
  }catch({message}){
    yield put(notifyError(message || ANY_ERROR_TEXT));
  }  
}

function* signOutUpdates({currentUser}: any) {
  try{
    // console.log("payload", payload);
    const response = yield call(signout, currentUser)
    yield put(signOutSuccess()); 
    yield put(notify(response.message)); 
  }catch({message}){
    yield put(notifyError(message || ANY_ERROR_TEXT));
  }  
}

export function* watchAuth() {
  yield takeLatest(START_LOGIN, loginUpdates)
  yield takeLatest(START_SIGNOUT, signOutUpdates)
}


