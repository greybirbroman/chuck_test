import styles from './SingleJokePage.module.css';
import paddingWrapper from '../HOC/paddingWrapper';
import { Card, CustomButton, Logo } from '../../components';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../../services/selectors/loadingSelectors';
import { getRandomJoke } from '../../services/selectors/randomJokeSelectors';
import useRandomJoke from '../../utils/hooks/useRandomJoke';

const SingleJokePage = () => {
  const joke = useSelector(getRandomJoke);
  const isLoading = useSelector(getIsLoading);
  const { handleSurprise } = useRandomJoke();
  const pageTitle = "Hi! It's a random joke from Chuck"

  // if (isLoading) return <Loader />;

  return (
    <div className={styles.page}>
      <Logo />
      <h1 className={styles.title}>{pageTitle}</h1>
      <Card joke={joke} />
      <CustomButton title={isLoading ? 'Wait...' : 'One More!'} onClick={handleSurprise} invert />
    </div>
  );
};

export default paddingWrapper(SingleJokePage);
