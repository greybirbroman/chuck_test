import styles from './JokesList.module.css';
import { Card, Loader, NotFoundField } from '../index';
import { useSelector } from 'react-redux';
import {
  getCurrentPage,
  getItemsOnPage,
} from '../../services/selectors/paginationSelectors';
import { getIsLoading } from '../../services/selectors/loadingSelectors';
import { getSearchResult } from '../../services/selectors/searchSelectors';

const JokesList = () => {
  const searchResult = useSelector(getSearchResult);
  const currentPage = useSelector(getCurrentPage);
  const itemsOnPage = useSelector(getItemsOnPage);
  const isLoading = useSelector(getIsLoading);

  const startIndex = (currentPage - 1) * itemsOnPage;
  const endIndex = startIndex + itemsOnPage;

  if (isLoading) {
    return <Loader />;
  }

  if (searchResult.length === 0) {
    return <NotFoundField />;
  }

  return (
    <ul className={styles.list}>
      {searchResult?.slice(startIndex, endIndex).map((joke, index) => (
        <Card key={joke.id} joke={joke} index={index} />
      ))}
    </ul>
  );
};

export default JokesList;
