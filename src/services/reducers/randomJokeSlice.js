import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RANDOM_JOKE } from '../constants';
import { getRandomJoke } from '../../utils/api';
import { setLoading } from '../actions/loadingActions';
import { setError } from '../actions/apiErrorsActions';

const initialState = {
  randomJoke: JSON.parse(sessionStorage.getItem(RANDOM_JOKE)) || {},
};

export const fetchRandomJoke = createAsyncThunk(
  'randomJoke/fetchRandomJoke',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await getRandomJoke();
      dispatch(setRandomJoke(response));
      sessionStorage.setItem(RANDOM_JOKE, JSON.stringify(response));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const randomJokeSlice = createSlice({
  name: 'randomJoke',
  initialState,
  reducers: {
    setRandomJoke: (state, action) => {
      state.randomJoke = action.payload;
    },
  },
});

export const { setRandomJoke } = randomJokeSlice.actions
export default randomJokeSlice.reducer
