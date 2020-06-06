import {call, put, takeLatest, select} from 'redux-saga/effects';
import {
  ADD_DATA_REQUEST,
  GET_DATA_REQUEST,
  DEL_DATA_REQUEST,
} from '../Actions/types';
import {
  addDataSuccessAction,
  addDataFailureAction,
  getDataSuccessAction,
  getDataFailureAction,
  delDataSuccessAction,
  delDataFailureAction,
} from '../Actions/dataActions';
import path from './path';

const fetchAddData = (personalNumber, token) =>
  fetch(path.addData, {
    method: 'POST',
    body: JSON.stringify({personalNumber, token}),
    headers: {
      'Content-type': 'application/json',
    },
  });

const fetchGetData = token =>
  fetch(path.getData, {
    method: 'POST',
    body: JSON.stringify({token}),
    headers: {
      'Content-type': 'application/json',
    },
  });

const fetchDelData = (id, token) =>
  fetch(path.delData, {
    method: 'POST',
    body: JSON.stringify({id, token}),
    headers: {
      'Content-type': 'application/json',
    },
  });

function* addDataWorker(action) {
  const token = yield select(state => state.authState.token);
  try {
    const res = yield call(fetchAddData, action.payload, token);
    const data = yield res.json();
    if (res.ok) {
      yield put(addDataSuccessAction(data.message, data.data));
    } else {
      yield put(addDataFailureAction(data.message));
    }
  } catch (e) {
    yield put(addDataFailureAction(e.message));
  }
}

function* delDataWorker(action) {
  const token = yield select(state => state.authState.token);
  try {
    const res = yield call(fetchDelData, action.payload, token);
    const data = yield res.json();
    if (res.ok) {
      yield put(delDataSuccessAction(data.message, data.data));
    } else {
      yield put(delDataFailureAction(data.message));
    }
  } catch (e) {
    yield put(delDataFailureAction(e.message));
  }
}

function* getDataWorker() {
  const token = yield select(state => state.authState.token);
  try {
    const res = yield call(fetchGetData, token);
    const data = yield res.json();
    if (res.ok) {
      yield put(getDataSuccessAction(data.data));
    } else {
      yield put(getDataFailureAction(data.message));
    }
  } catch (e) {
    yield put(getDataFailureAction(e.message));
  }
}

export default function* dataWatcher() {
  yield takeLatest(ADD_DATA_REQUEST, addDataWorker);
  yield takeLatest(GET_DATA_REQUEST, getDataWorker);
  yield takeLatest(DEL_DATA_REQUEST, delDataWorker);
}
