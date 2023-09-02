import { SET_ERROR } from '../types';

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});
