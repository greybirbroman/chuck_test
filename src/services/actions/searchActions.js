import {
  SET_SEARCH_QUERY,
  RESET_SEARCH_QUERY,
  SET_SEARCH_RESULT,
  SET_SEARCH_COMPLETED,
  SET_SEARCH_ERROR,
} from '../types';

import { getJokesByQuery } from '../../utils/api';

import { SEARCH_QUERY, SEARCH_RESULT } from '../constants';
import { setLoading } from '../actions/loadingActions';
import { resetPaginationSettings } from './paginationActions';

export const setSearchQuery = (query) => {
  sessionStorage.setItem(SEARCH_QUERY, query);
  return {
    type: SET_SEARCH_QUERY,
    payload: query,
  };
};

export const resetSearchQuery = () => {
  sessionStorage.clear();
  return {
    type: RESET_SEARCH_QUERY,
  };
};

export const fetchSearchResult = (query) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const response = await getJokesByQuery(query);
    const result = response.result;
    dispatch({
      type: SET_SEARCH_RESULT,
      payload: result,
    });
    sessionStorage.setItem(SEARCH_RESULT, JSON.stringify(result));
    dispatch(setSearchCompleted(true));
    dispatch(resetPaginationSettings())
  } catch (error) {
    dispatch(setSearchError(error));
  } finally {
    dispatch(setLoading(false))
  }
};

export const setSearchError = (error) => ({
  type: SET_SEARCH_ERROR,
  payload: error,
});

export const setSearchCompleted = (completed) => ({
  type: SET_SEARCH_COMPLETED,
  payload: completed,
});
