import { SET_RANDOM_JOKE } from '../types';

import { RANDOM_JOKE } from '../constants';
import { getRandomJoke } from '../../utils/api';
import { setLoading } from './loadingActions';
import { setError } from './apiErrorsActions';

export const setRandomJoke = () =>  async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const response = await getRandomJoke()
    dispatch({
      type: SET_RANDOM_JOKE,
      payload: response
    })
    sessionStorage.setItem(RANDOM_JOKE, JSON.stringify(response))
  } catch (error) {
    dispatch(setError(error))
  } finally {
    dispatch(setLoading(false))
  }
};
