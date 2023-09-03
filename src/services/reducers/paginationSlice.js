import { createSlice } from '@reduxjs/toolkit';
import { PAGINATION_SETTINGS } from '../constants';

const loadPaginationSettingsFromStorage = () => {
  const storedSettings = sessionStorage.getItem(PAGINATION_SETTINGS);
  if (storedSettings) {
    return JSON.parse(storedSettings);
  }
  return { currentPage: 1, itemsOnPage: 8 };
};

const initialState = loadPaginationSettingsFromStorage();

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      sessionStorage.setItem(PAGINATION_SETTINGS, JSON.stringify(state));
    },
    setItemsOnPage: (state, action) => {
      state.itemsOnPage = action.payload;
      sessionStorage.setItem(PAGINATION_SETTINGS, JSON.stringify(state));
    },
    resetPaginationSettings: (state) => {
      state.currentPage = 1;
      state.itemsOnPage = 8;
      sessionStorage.removeItem(PAGINATION_SETTINGS);
    },
  },
});
export const { setCurrentPage, setItemsOnPage, resetPaginationSettings } =
  paginationSlice.actions;
export default paginationSlice.reducer;
