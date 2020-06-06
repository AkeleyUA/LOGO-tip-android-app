import {CLEAR_MESSAGE, CLEAR_FIELDS} from './types';

export const clearMessageAction = () => ({
  type: CLEAR_MESSAGE,
});

export const clearFieldsAction = () => ({
  type: CLEAR_FIELDS,
});
