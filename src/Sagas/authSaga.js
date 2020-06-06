import {call, put, takeLatest} from 'redux-saga/effects';
import {
  loginSuccessAction,
  loginFailureAction,
  registrationSuccessAction,
  registrationFailureAction,
  registrationSuccessRedirectAction,
} from '../Actions/authActions';
import {LOGIN_REQUEST, REGISTRATION_REQUEST} from '../Actions/types';
import path from './path';

const fetchLogin = form =>
  fetch(path.login, {
    method: 'POST',
    body: JSON.stringify({...form}),
    headers: {
      'Content-type': 'application/json',
    },
  });

const fetchRegistration = form =>
  fetch(path.registration, {
    method: 'POST',
    body: JSON.stringify({...form}),
    headers: {
      'Content-type': 'application/json',
    },
  });
function* logingWorker(action) {
  try {
    const res = yield call(fetchLogin, action.payload);
    const data = yield res.json();
    if (res.ok) {
      yield put(loginSuccessAction(data.token));
    } else {
      yield put(loginFailureAction(data.message));
    }
  } catch (e) {
    yield put(loginFailureAction(e.message));
  }
}

function* registrationWorker(action) {
  try {
    const res = yield call(fetchRegistration, action.payload);
    const data = yield res.json();
    if (res.ok) {
      yield put(registrationSuccessRedirectAction());
      yield put(registrationSuccessAction(data.message));
    } else {
      yield put(registrationFailureAction(data.message));
    }
  } catch (e) {
    yield put(registrationFailureAction(e.message));
  }
}

export default function* authWatcher() {
  yield takeLatest(LOGIN_REQUEST, logingWorker);
  yield takeLatest(REGISTRATION_REQUEST, registrationWorker);
}
