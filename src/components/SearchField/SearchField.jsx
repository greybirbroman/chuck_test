import styles from './SearchField.module.css';
import { useSelector } from 'react-redux';
import { ReactComponent as ResetIcon } from '../../images/close_icon.svg';
import SearchResultBar from '../SearchResultBar/SearchResultBar';
import { getSearchQuery } from '../../services/selectors/searchSelectors';
import useSearchField from '../../utils/hooks/useSearchField';

const SearchField = () => {
  const { handleChange, handleResetQuery, handleKeyPress, inputRef } = useSearchField();
  const searchQuery = useSelector(getSearchQuery);
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
        <fieldset className={styles.fieldset}>
          <input
            type='text'
            placeholder='Search jokes...'
            value={searchQuery}
            maxLength={40}
            ref={inputRef}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            className={styles.input}
          />
          {searchQuery && (
            <div className={styles.iconContainer} onClick={handleResetQuery}>
              <ResetIcon />
            </div>
          )}
        </fieldset>
        <SearchResultBar />
      </form>
    </>
  );
};

export default SearchField;
