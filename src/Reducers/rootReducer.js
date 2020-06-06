import {combineReducers} from 'redux';
import settingsState from './settingsReducer';
import authState from './authReducer';
import dataState from './dataReducer';
import itemsState from './itemsReducer';

const rootReducer = combineReducers({
  settingsState,
  authState,
  dataState,
  itemsState,
});

export default rootReducer;
