import {
  SET_SEARCH_QUERY,
  RESET_SEARCH_QUERY,
  SET_SEARCH_RESULT,
  SET_SEARCH_COMPLETED,
  SET_SEARCH_ERROR,
} from '../types';

const SEARCH_RESULT = 'searchResult';
const SEARCH_QUERY = 'searchQuery'

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

export const setSearchResult = (result) => {
  sessionStorage.setItem(SEARCH_RESULT, JSON.stringify(result));
  return {
    type: SET_SEARCH_RESULT,
    payload: result,
  };
};

export const setSearchError = (error) => ({
  type: SET_SEARCH_ERROR,
  payload: error,
});

export const setSearchCompleted = (completed) => ({
  type: SET_SEARCH_COMPLETED,
  payload: completed,
});
