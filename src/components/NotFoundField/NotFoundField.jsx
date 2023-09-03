import styles from './NotFoundField.module.css';
import { useSelector } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import {
  getSearchResult,
  getIsSearchCompleted,
  getSearchQuery,
} from '../../services/selectors/searchSelectors';
import { getError } from '../../services/selectors/apiErrorsSelectors';
import useRandomJoke from '../../utils/hooks/useJokesNav';

const NotFoundField = () => {
  const query = useSelector(getSearchQuery);
  const error = useSelector(getError);
  const searchResult = useSelector(getSearchResult);
  const isSearchCompleted = useSelector(getIsSearchCompleted);
  const { handleSurprise } = useRandomJoke();

  const errorRenderer = () => {
    if (query && query.length < 4) {
      return (
        <p className={styles.text}>
          Search query cannot be shorter than{' '}
          <span className={styles.span}>4</span> characters
        </p>
      );
    } else if (
      !searchResult.length &&
      query.length >= 4 &&
      isSearchCompleted &&
      !error
    ) {
      return (
        <>
          <p className={styles.text}>
            Sorry, there were no results found for{' '}
            <span className={styles.span}>{query}</span>
          </p>
          <CustomButton
            title='Surprise me...'
            onClick={handleSurprise}
            invert
          />
        </>
      );
    }
    if (error !== null && isSearchCompleted) {
      return <p className={styles.text}>{error}</p>;
    } else {
      return null;
    }
  };
  return <div className={styles.container}>{errorRenderer()}</div>;
};

export default NotFoundField;
