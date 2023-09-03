import { combineReducers } from 'redux';

import apiErrorsSlice from './apiErrorsSlice';
import paginationSlice from './paginationSlice';
import loadingSlice from './loadingSlice';
import searchSlice from './searchSlice';
import randomJokeSlice from './randomJokeSlice';

export const rootReducer = combineReducers({
  search: searchSlice,
  error: apiErrorsSlice,
  loading: loadingSlice,
  pagination: paginationSlice,
  randomJoke: randomJokeSlice,
});
