import { useNavigate, useLocation } from 'react-router-dom';
import { getRandomJoke } from '../api';
import { useDispatch } from 'react-redux';
import { setIsRandom } from '../../services/reducers/randomJokeSlice';
import { resetSearchSettings } from '../../services/reducers/searchSlice';

const useHandlers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleReturnToHome = () => {
      dispatch(resetSearchSettings());
      dispatch(setIsRandom(false))
      navigate('/');
  }

  const handleLinkClick = (e) => {
    if (location.pathname.includes('jokes')) {
      e.preventDefault();
    }
    dispatch(setIsRandom(false))
  };

  const handleSurprise = async () => {
    const randomJoke = await getRandomJoke();
    dispatch(setIsRandom(true));
    navigate(`/jokes/${randomJoke.id}`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  return {
    handleSurprise,
    handleGoBack,
    handleLinkClick,
    handleReturnToHome
  };
};

export default useHandlers;
