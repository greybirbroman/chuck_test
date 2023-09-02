import { SET_ERROR } from '../types';

const initialState = {
  error: null,
};

const apiErrorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload.message };
    default:
      return state;
  }
};
export default apiErrorsReducer;
