import styles from './Card.module.css';
import { formatDate } from '../../utils/helpers';
import { cardVariants } from '../../utils/motion';
import { motion as m } from 'framer-motion';

const Card = ({ joke, index }) => {
  const { id, value, created_at, url } = joke;
  console.log(joke)

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
      <a
        href={url}
        target='_blank'
        rel='noreferrer'
        className={styles.cardLink}
      >
        {''}
      </a>
      <p className={styles.cardText}>{value}</p>
      <div className={styles.cardInfo}>
        <span>{id}</span>
        <span>{formatDate(new Date(created_at))}</span>
      </div>
    </m.li>
  );
};

export default Card;
