import styles from './Logo.module.css';
import chuckLogo from '../../images/chuck_logo.png';
import useHandlers from '../../utils/hooks/useHandlers';

const Logo = () => {
  const { handleReturnToHome } = useHandlers();
  return (
    <img
      src={chuckLogo}
      alt='Chuck Norris Api Logo'
      className={styles.logo}
      onClick={handleReturnToHome}
    />
  );
};

export default Logo;
