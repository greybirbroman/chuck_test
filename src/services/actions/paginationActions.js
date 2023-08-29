import { SET_PAGINATION_SETTINGS, RESET_PAGINATION_SETTINGS } from '../types';

const PAGINATION_SETTINGS = 'paginationSettings';

export const setPaginationSettings = (currentPage, itemsOnPage) => {
  const settings = { currentPage, itemsOnPage };
  sessionStorage.setItem(PAGINATION_SETTINGS, JSON.stringify(settings));
  return {
    type: SET_PAGINATION_SETTINGS,
    payload: { currentPage, itemsOnPage },
  };
};

export const resetPaginationSettings = (currentPage, itemsOnPage) => {
  sessionStorage.removeItem(PAGINATION_SETTINGS);
  return {
    type: RESET_PAGINATION_SETTINGS,
    payload: { currentPage, itemsOnPage },
  };
};
