import { SET_RANDOM_JOKE } from '../types';

const RANDOM_JOKE = 'randomJoke';

const initialState = {
  randomJoke: JSON.parse(sessionStorage.getItem(RANDOM_JOKE)) || {},
};

const randomJokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANDOM_JOKE:
      return { ...state, randomJoke: action.payload };
    default:
      return state;
  }
};

export default randomJokeReducer