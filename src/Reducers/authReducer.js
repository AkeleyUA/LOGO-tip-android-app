import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  CLEAR_MESSAGE,
  REGISTRATION_SUCCESS_REDIRECT,
  LOGOUT,
} from '../Actions/types';

const initialState = {
  loading: false,
  message: null,
  token: null,
  redirect: true,
};

const authState = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload,
        message: null,
        loading: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    }
    case REGISTRATION_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    }
    case REGISTRATION_SUCCESS_REDIRECT: {
      return {
        ...state,
        redirect: true,
      };
    }
    case REGISTRATION_FAILURE: {
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    }
    case CLEAR_MESSAGE: {
      return {
        ...state,
        message: null,
        redirect: false,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        token: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default authState;
