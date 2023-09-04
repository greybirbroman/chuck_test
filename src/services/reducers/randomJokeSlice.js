import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RANDOM_JOKE } from '../constants';
import { getRandomJoke } from '../../utils/api';
import { setIsLoading } from './loadingSlice';
import { setError } from './apiErrorsSlice';

const initialState = {
  randomJoke: JSON.parse(sessionStorage.getItem(RANDOM_JOKE)) || {},
};

export const fetchRandomJoke = createAsyncThunk(
  'randomJoke/fetchRandomJoke',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setIsLoading(true));
      const response = await getRandomJoke();
      dispatch(setRandomJoke(response));
      sessionStorage.setItem(RANDOM_JOKE, JSON.stringify(response));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setIsLoading(false));
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
    setIsRandom: (state, action) => {
      state.isRandom = action.payload
    }
  },
});

export const { setRandomJoke, setIsRandom } = randomJokeSlice.actions
export default randomJokeSlice.reducer
