import {call, put, takeLatest, select} from 'redux-saga/effects';
import {
  addItemSuccessAction,
  addItemFailureAction,
  getItemSuccessAction,
  getItemFailureAction,
} from '../Actions/itemsActions';
import {ADD_ITEM_REQUEST, GET_ITEM_REQUEST} from '../Actions/types';
import path from './path';

const fetchAddItem = ({value, dataID}, dateStart) => {
  return fetch(path.addItem, {
    method: 'POST',
    body: JSON.stringify({
      value,
      parent: dataID,
      dateEnd: new Date(),
      dateStart,
    }),
    headers: {'Content-type': 'application/json'},
  });
};

const fetchGetItems = id => {
  return fetch(path.getItem, {
    method: 'POST',
    body: JSON.stringify({id}),
    headers: {'Content-type': 'application/json'},
  });
};

function* addItemWorker(action) {
  const dateStart = yield select(state =>
    state.itemsState.currentItem === undefined
      ? 0
      : state.itemsState.currentItem.dateEnd,
  );
  try {
    const res = yield call(fetchAddItem, {...action.payload}, dateStart);
    const data = yield res.json();
    if (res.ok) {
      yield put(addItemSuccessAction(data.message, data.items));
    } else {
      yield put(addItemFailureAction(data.message));
    }
  } catch (e) {
    yield put(addItemFailureAction(e.message));
  }
}

function* getItemsWorker(action) {
  try {
    const res = yield call(fetchGetItems, action.payload);
    const data = yield res.json();
    if (res.ok) {
      yield put(getItemSuccessAction(data.items));
    } else {
      yield put(getItemFailureAction(data.message));
    }
  } catch (e) {
    yield put(getItemFailureAction(e.message));
  }
}

function* itemsWatcher() {
  yield takeLatest(ADD_ITEM_REQUEST, addItemWorker);
  yield takeLatest(GET_ITEM_REQUEST, getItemsWorker);
}

export default itemsWatcher;
