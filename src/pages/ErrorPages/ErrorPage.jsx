import styles from './ErrorPage.module.css'
import { ReactComponent as NotFoundImage } from '../../images/404.svg';
import { Link } from 'react-router-dom';

const ErrorPage = ({ title, subtitle }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <NotFoundImage />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <Link title='Main Page' to='/' className={styles.link}>
            On Main
          </Link>
          <p className={styles.text}>
            Keep looking for the best jokes from Chuck Norris
          </p>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;