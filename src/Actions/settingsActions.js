import {CHANGE_THEME} from './types';

export const changeThemeAction = theme => ({
  type: CHANGE_THEME,
  payload: theme,
});
