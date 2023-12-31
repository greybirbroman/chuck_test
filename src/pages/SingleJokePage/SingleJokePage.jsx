import styles from './SingleJokePage.module.css';
import { Suspense } from 'react';
import { useLoaderData, Await, useAsyncValue } from 'react-router-dom';
import paddingWrapper from '../HOC/paddingWrapper';
import { Card, CustomButton, Logo, Loader } from '../../components';
import { getJokeById } from '../../utils/api';
import useJokesNav from '../../utils/hooks/useHandlers';
import { useSelector } from 'react-redux';
import { getIsRandom } from '../../services/selectors/randomJokeSelectors';

const JokeFromApi = () => {
  const joke = useAsyncValue();
  return <Card joke={joke} />;
};

const SingleJokePage = () => {
  const { joke } = useLoaderData();
  const { handleSurprise, handleGoBack } = useJokesNav();
  const isRandom = useSelector(getIsRandom);
  const pageTitle = isRandom
    ? "It's a Random Joke from Chuck!"
    : "Hi! It's a page with Single Joke";

  return (
    <div className={styles.page}>
      <Suspense fallback={<Loader />}>
        <Logo />
        <h1 className={styles.title}>{pageTitle}</h1>
        <Await resolve={joke}>
          <JokeFromApi />
        </Await>
        <div className={styles.buttonsContainer}>
          <CustomButton title='Go Back!' onClick={handleGoBack} />
          <CustomButton
            title={isRandom ? 'One more!' : 'Random!'}
            onClick={handleSurprise}
            invert
          />
        </div>
      </Suspense>
    </div>
  );
};

async function getJoke(id) {
  const result = await getJokeById(id);
  const joke = result;
  return joke;
}

export const jokeLoader = async ({ params }) => {
  const id = params.id;
  return { joke: getJoke(id) };
};

export default paddingWrapper(SingleJokePage);
