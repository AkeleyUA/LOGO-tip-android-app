import {
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
  ADD_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  DEL_DATA_REQUEST,
  DEL_DATA_SUCCESS,
  DEL_DATA_FAILURE,
} from './types';

export const getDataRequestAction = () => ({
  type: GET_DATA_REQUEST,
});

export const getDataSuccessAction = data => ({
  type: GET_DATA_SUCCESS,
  payload: data,
});

export const getDataFailureAction = message => ({
  type: GET_DATA_FAILURE,
  payload: message,
});

export const addDataRequestAction = personalNumber => ({
  type: ADD_DATA_REQUEST,
  payload: personalNumber,
});

export const addDataSuccessAction = (message, data) => ({
  type: ADD_DATA_SUCCESS,
  payload: {message, data},
});

export const addDataFailureAction = message => ({
  type: ADD_DATA_FAILURE,
  payload: message,
});

export const delDataRequestAction = id => ({
  type: DEL_DATA_REQUEST,
  payload: id,
});

export const delDataSuccessAction = (message, data) => ({
  type: DEL_DATA_SUCCESS,
  payload: {message, data},
});

export const delDataFailureAction = message => ({
  type: DEL_DATA_FAILURE,
  payload: message,
});
