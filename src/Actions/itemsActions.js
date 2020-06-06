import {
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILURE,
} from './types';

export const addItemRequestAction = form => ({
  type: ADD_ITEM_REQUEST,
  payload: {...form},
});

export const addItemSuccessAction = (message, items) => ({
  type: ADD_ITEM_SUCCESS,
  payload: {message, items},
});

export const addItemFailureAction = message => ({
  type: ADD_ITEM_FAILURE,
  payload: message,
});

export const getItemRequestAction = dataID => ({
  type: GET_ITEM_REQUEST,
  payload: dataID,
});

export const getItemSuccessAction = items => ({
  type: GET_ITEM_SUCCESS,
  payload: items,
});

export const getItemFailureAction = message => ({
  type: GET_ITEM_FAILURE,
  payload: message,
});
