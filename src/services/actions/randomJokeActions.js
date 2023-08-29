import { SET_RANDOM_JOKE } from '../types';

const RANDOM_JOKE = 'randomJoke';

export const setRandomJoke = (joke) => {
  sessionStorage.setItem(RANDOM_JOKE, JSON.stringify(joke));
  return {
    type: SET_RANDOM_JOKE,
    payload: joke,
  };
};
