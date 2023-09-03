import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: null,
};

export const apiErrorsSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload.message;
    },
  },
});

export const { setError } = apiErrorsSlice.actions;
export default apiErrorsSlice.reducer;
