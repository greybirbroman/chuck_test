import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getJokesByQuery } from '../../utils/api';
import { setLoading } from '../actions/loadingActions';
import { setError } from '../actions/apiErrorsActions';
import { resetPaginationSettings } from '../reducers/paginationSlice';
import { SEARCH_QUERY, SEARCH_RESULT } from '../constants';

const initialState = {
  query: sessionStorage.getItem(SEARCH_QUERY) || '',
  searchResult: JSON.parse(sessionStorage.getItem(SEARCH_RESULT)) || [],
  isSearchCompleted: false,
};

export const fetchSearchResult = createAsyncThunk(
  'search/fetchSearchResult',
  async (query, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await getJokesByQuery(query);
      const result = response.result;
      dispatch(setSearchResult(result));
      dispatch(resetPaginationSettings());
      sessionStorage.setItem(SEARCH_RESULT, JSON.stringify(result));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchSettings: (state, action) => {
      state.query = action.payload;
      state.isSearchCompleted = false;
      if(state.query.length < 4) {
          state.searchResult = []
          sessionStorage.removeItem(SEARCH_RESULT)
      }
      sessionStorage.setItem(SEARCH_QUERY, state.query);
    },
    resetSearchSettings: (state) => {
      state.query = '';
      state.searchResult = [];
      state.isSearchCompleted = false;
      sessionStorage.clear();
    },
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResult.pending, (state) => {
        state.isSearchCompleted = false;
      })
      .addCase(fetchSearchResult.fulfilled, (state) => {
        state.isSearchCompleted = true;
      })
      .addCase(fetchSearchResult.rejected, (state) => {
        state.isSearchCompleted = true;
      });
  },
});

export const { setSearchSettings, setSearchResult, resetSearchSettings } =
  searchSlice.actions;
export default searchSlice.reducer;
