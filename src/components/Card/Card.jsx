import styles from './Card.module.css';
import {useState} from 'react'
import { formatDate } from '../../utils/helpers';
import { cardVariants } from '../../utils/motion';
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Card = ({ joke, index }) => {
  const { id, value, created_at } = joke;
  const [hasBeenClicked, setHasBeenClicked] = useState(false)
  const location = useLocation()
  if (!joke) return null;

  return (
    <m.li
      variants={location.pathname === '/' && cardVariants}
      custom={index}
      initial='hidden'
      animate='visible'
      className={`${styles.card} ${
        index > 1 ? styles.card_small : styles.card_regular
      }`}
    >
    
      <Link to={`/jokes/${id}`} className={styles.cardLink}>
        {''}
      </Link>
      <p className={styles.cardText}>{value}</p>
      <div className={styles.cardInfo}>
        <span>{id}</span>
        <span>{formatDate(new Date(created_at))}</span>
      </div>
    </m.li>
  );
};

export default Card;
