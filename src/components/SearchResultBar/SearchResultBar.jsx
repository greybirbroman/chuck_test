import styles from './SearchResultBar.module.css';
import { useSelector } from 'react-redux';
import { getSearchResult } from '../../services/selectors/searchSelectors';

const SearchResultBar = () => {
  const result = useSelector(getSearchResult);
  return (
    result &&
    result.length !== 0 && (
      <span className={styles.span}>Found jokes: {result.length}</span>
    )
  );
};

export default SearchResultBar;
