import { SET_PAGINATION_SETTINGS, RESET_PAGINATION_SETTINGS } from '../types';

const SESSION_STORAGE_KEY = 'paginationSettings';

const loadPaginationSettingsFromStorage = () => {
    const storedSettings = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (storedSettings) {
      return JSON.parse(storedSettings);
    }
    return { currentPage: 1, itemsOnPage: 8 }; // Значения по умолчанию
  };

const initialState = loadPaginationSettingsFromStorage()

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGINATION_SETTINGS:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        itemsOnPage: action.payload.itemsOnPage,
      };
    case RESET_PAGINATION_SETTINGS:
      return {
        ...state,
        currentPage: 1,
        itemsOnPage: 8,
      };
    default:
      return state;
  }
};
export default paginationReducer;
