import { all } from 'redux-saga/effects';
import { watchEmail } from './email';
import {watchAuth} from './auth';

export default function* rootSaga()  {
    return yield all([watchEmail(), watchAuth()]);
}