import {
  SET_SEARCH_QUERY,
  RESET_SEARCH_QUERY,
  SET_SEARCH_RESULT,
  SET_SEARCH_COMPLETED,
  SET_SEARCH_ERROR,
} from '../types';

const SEARCH_RESULT = 'searchResult';
const SEARCH_QUERY = 'searchQuery'

const initialState = {
  query: sessionStorage.getItem(SEARCH_QUERY) || '',
  searchResult: JSON.parse(sessionStorage.getItem(SEARCH_RESULT)) || [],
  isSearchCompleted: false,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return { ...state, query: action.payload, isSearchCompleted: false };
    case RESET_SEARCH_QUERY:
      return { ...state, searchResult: [], query: '', isSearchCompleted: false };
    case SET_SEARCH_RESULT:
      return { ...state, searchResult: action.payload, error: null, isSearchCompleted: true };
    case SET_SEARCH_ERROR:
      return { ...state, searchResult: [], error: action.payload, isSearchCompleted: true };
    case SET_SEARCH_COMPLETED:
      return { ...state, isSearchCompleted: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
