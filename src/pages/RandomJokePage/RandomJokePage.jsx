import styles from './RandomJokePage.module.css';
import paddingWrapper from '../HOC/paddingWrapper';
import { Card, CustomButton, Logo } from '../../components';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../../services/selectors/loadingSelectors';
import { getRandomJoke } from '../../services/selectors/randomJokeSelectors';
import useJokesNav from '../../utils/hooks/useJokesNav';

const RandomJokePage = () => {
  const joke = useSelector(getRandomJoke);
  const isLoading = useSelector(getIsLoading);
  const { handleSurprise, handleGoBack } = useJokesNav();
  const pageTitle = "Hi! It's a page with Random Chuck Joke";

  return (
    <div className={styles.page}>
      <Logo />
      <h1 className={styles.title}>{pageTitle}</h1>
      <Card joke={joke} />
      <div className={styles.buttonsContainer}>
        <CustomButton title={'Go Back'} onClick={handleGoBack} />
        <CustomButton
          title={isLoading ? 'Wait...' : 'One More!'}
          onClick={handleSurprise}
          invert
        />
      </div>
    </div>
  );
};

export default paddingWrapper(RandomJokePage);
