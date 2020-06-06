import {
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILURE,
  CLEAR_MESSAGE,
} from '../Actions/types';

const inititalState = {
  loading: false,
  message: null,
  dataItems: [],
  currentItem: undefined,
};

const itemsState = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_ITEM_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_ITEM_SUCCESS: {
      return {
        ...state,
        dataItems: action.payload.items,
        currentItem: action.payload.items[0],
        message: action.payload.message,
        loading: false,
      };
    }
    case ADD_ITEM_FAILURE: {
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    }
    case GET_ITEM_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_ITEM_SUCCESS: {
      return {
        ...state,
        dataItems: action.payload,
        currentItem: action.payload[0],
        loading: false,
      };
    }
    case GET_ITEM_FAILURE: {
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
    default:
      return state;
  }
};

export default itemsState;
