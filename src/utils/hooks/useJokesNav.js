import { useNavigate } from 'react-router-dom';
import { getRandomJoke } from '../api';
import { useDispatch } from 'react-redux';
import { setIsRandom } from '../../services/reducers/randomJokeSlice';

const useJokesNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSurprise = async () => {
    const randomJoke = await getRandomJoke();
    dispatch(setIsRandom(true))
    navigate(`/jokes/${randomJoke.id}`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  return {
    handleSurprise,
    handleGoBack,
  };
};

export default useJokesNav;
