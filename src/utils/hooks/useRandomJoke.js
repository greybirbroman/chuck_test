import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRandomJoke } from '../../services/reducers/randomJokeSlice';

const useRandomJoke = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSinglePage = location.pathname === '/random-joke';
  const dispatch = useDispatch();

  const handleSurprise = () => {
    dispatch(fetchRandomJoke());
    if (!isSinglePage) {
      navigate('/random-joke');
    }
  };
  return {
    handleSurprise,
  };
};

export default useRandomJoke;
