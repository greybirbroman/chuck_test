import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getRandomJoke } from '../../utils/api';
import { setRandomJoke } from '../../services/actions/randomJokeActions';
import { setLoading } from '../../services/actions/loadingActions';

const useRandomJoke = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSinglePage = location.pathname === '/random-joke';
  const dispatch = useDispatch();

  const handleSurprise = async () => {
    try {
      dispatch(setLoading(true));
      const response = await getRandomJoke();
      dispatch(setRandomJoke(response));
      if (!isSinglePage) {
        navigate('/random-joke');
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return {
    handleSurprise,
  };
};

export default useRandomJoke;
