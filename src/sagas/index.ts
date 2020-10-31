import { all } from 'redux-saga/effects';
import { watchEmail } from './email';

export default function* rootSaga()  {
    return yield all([watchEmail()]);
}