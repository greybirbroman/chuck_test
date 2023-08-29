import styles from './NotFoundField.module.css';
import { useSelector } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import {
  getSearchResult,
  getIsSearchCompleted,
  getSearchQuery,
} from '../../services/selectors/searchSelectors';
import useRandomJoke from '../../utils/hooks/useRandomJoke';

const NotFoundField = () => {
  const query = useSelector(getSearchQuery);
  const searchResult = useSelector(getSearchResult);
  const isSearchCompleted = useSelector(getIsSearchCompleted);
  const { handleSurprise } = useRandomJoke();

  const errorRenderer = () => {
    if (!searchResult.length && query.length >= 4 && isSearchCompleted) {
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
    if (query.length < 4 && !isSearchCompleted) {
      return (
        <p className={styles.text}>
          Search query cannot be shorter than{' '}
          <span className={styles.span}>4</span> characters
        </p>
      );
    }
    return null;
  };

  return query && <div className={styles.container}>{errorRenderer()}</div>;
};

export default NotFoundField;
