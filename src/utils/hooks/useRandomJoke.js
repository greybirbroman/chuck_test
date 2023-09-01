import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setRandomJoke } from '../../services/actions/randomJokeActions';


const useRandomJoke = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSinglePage = location.pathname === '/random-joke';
  const dispatch = useDispatch();

  const handleSurprise = () => {
    dispatch(setRandomJoke())
    if(!isSinglePage) {
      navigate('/random-joke')
    }
  }
  return {
    handleSurprise,
  };
};

export default useRandomJoke;
