import styles from './Card.module.css';
import { formatDate } from '../../utils/helpers';
import { cardVariants } from '../../utils/motion';
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useHandlers from '../../utils/hooks/useHandlers';

const Card = ({ joke, index }) => {
  const location = useLocation();
  const { handleLinkClick } = useHandlers();
  const { id, value, created_at } = joke;

  if (!joke) return null;

  return (
    <m.li
      variants={cardVariants}
      custom={index}
      initial='hidden'
      animate='visible'
      className={`${styles.card} ${
        index > 1 ? styles.card_small : styles.card_regular
      }`}
    >
      {location.pathname === '/' && (
        <Link
          to={`/jokes/${id}`}
          className={styles.cardLink}
          onClick={(e) => handleLinkClick(e)}
        />
      )}

      <p className={styles.cardText}>{value}</p>
      <div className={styles.cardInfo}>
        <span>{id}</span>
        <span>{formatDate(new Date(created_at))}</span>
      </div>
    </m.li>
  );
};

export default Card;
