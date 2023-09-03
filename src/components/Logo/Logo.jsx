import styles from './Logo.module.css';
import { useNavigate } from 'react-router-dom';
import chuckLogo from '../../images/chuck_logo.png';
import { resetSearchSettings } from '../../services/reducers/searchSlice';
import { useDispatch } from 'react-redux';

const Logo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleReturn = () => {
    dispatch(resetSearchSettings());
    navigate('/');
  };

  return (
    <img
      src={chuckLogo}
      alt='Chuck Norris Api Logo'
      className={styles.logo}
      onClick={handleReturn}
    />
  );
};

export default Logo;
