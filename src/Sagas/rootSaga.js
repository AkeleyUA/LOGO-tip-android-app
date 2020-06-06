import {all} from 'redux-saga/effects';
import authWatcher from './authSaga';
import dataWatcher from './dataSaga';
import itemsWatcher from './itemsSaga';

export default function* rootSaga() {
  yield all([authWatcher(), dataWatcher(), itemsWatcher()]);
}
