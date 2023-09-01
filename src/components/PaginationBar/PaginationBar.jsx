import styles from './PaginationBar.module.css';
import CustomButton from '../CustomButton/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { setPaginationSettings } from '../../services/actions/paginationActions';
import {
  getCurrentPage,
  getItemsOnPage,
} from '../../services/selectors/paginationSelectors';
import { getSearchResult } from '../../services/selectors/searchSelectors';

const PaginationBar = () => {
  const dispatch = useDispatch();
  const list = useSelector(getSearchResult);
  const currentPage = useSelector(getCurrentPage);
  const itemsOnPage = useSelector(getItemsOnPage);

  const startIndex = (currentPage - 1) * itemsOnPage;
  const endIndex = startIndex + itemsOnPage;
  const totalPages = Math.ceil(list.length / itemsOnPage) || 0;

  const handleShowMore = () => {
    dispatch(setPaginationSettings(currentPage + 1, itemsOnPage));
  };

  const handleShowLess = () => {
    dispatch(setPaginationSettings(currentPage - 1, itemsOnPage));
  };

  return (
    list && list.length !== 0 && totalPages > 1 &&
      <div className={styles.container}>
        <CustomButton title='less' onClick={handleShowLess} disabled={currentPage === 1} />
        <span className={styles.pages}>
          {currentPage} / {totalPages}
        </span>
        <CustomButton title='more' onClick={handleShowMore} disabled={endIndex >= list.length} />
      </div>
    )
  
};

export default PaginationBar;
