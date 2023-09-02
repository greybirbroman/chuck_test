import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/index';
import searchSlice from './reducers/searchSlice';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
