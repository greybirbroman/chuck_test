import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRandomJoke } from '../../services/reducers/randomJokeSlice';

const useJokesNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isRandomJoke = location.pathname === '/random-joke';
  const dispatch = useDispatch();

  const handleSurprise = () => {
    dispatch(fetchRandomJoke());
    if (!isRandomJoke) {
      navigate('/random-joke');
    }
  };

  const handleGoBack = () => {
    navigate(-1)
  }
  return {
    handleSurprise,
    handleGoBack
  };
};

export default useJokesNav;
