import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  REGISTRATION_SUCCESS_REDIRECT,
  LOGOUT,
} from './types';

export const loginRequestAction = form => ({
  type: LOGIN_REQUEST,
  payload: form,
});

export const loginSuccessAction = token => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailureAction = message => ({
  type: LOGIN_FAILURE,
  payload: message,
});

export const registrationRequestAction = form => ({
  type: REGISTRATION_REQUEST,
  payload: form,
});

export const registrationSuccessAction = message => ({
  type: REGISTRATION_SUCCESS,
  payload: message,
});

export const registrationSuccessRedirectAction = () => ({
  type: REGISTRATION_SUCCESS_REDIRECT,
});

export const registrationFailureAction = message => ({
  type: REGISTRATION_FAILURE,
  payload: message,
});

export const logoutAction = () => ({
  type: LOGOUT,
});
