import {CHANGE_THEME} from '../Actions/types';

const initialState = {
  theme: true,
};

const settingsState = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default settingsState;
