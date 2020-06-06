import {
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
  ADD_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  CLEAR_MESSAGE,
  DEL_DATA_REQUEST,
  DEL_DATA_SUCCESS,
  DEL_DATA_FAILURE,
  CLEAR_FIELDS,
  LOGOUT,
} from '../Actions/types';

const initialState = {
  loading: false,
  message: null,
  data: [],
  field: false,
};

const dataState = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case GET_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    }
    case ADD_DATA_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        data: action.payload.data,
        field: true,
      };
    }
    case ADD_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    }
    case DEL_DATA_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case DEL_DATA_SUCCESS: {
      return {
        ...state,
        message: action.payload.message,
        data: action.payload.data,
        loading: false,
      };
    }
    case DEL_DATA_FAILURE: {
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    }
    case CLEAR_MESSAGE: {
      return {
        ...state,
        message: null,
      };
    }
    case CLEAR_FIELDS: {
      return {
        ...state,
        field: false,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        data: [],
      };
    }
    default:
      return state;
  }
};

export default dataState;
