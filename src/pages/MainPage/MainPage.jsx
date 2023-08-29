import styles from './MainPage.module.css';
import paddingWrapper from '../HOC/paddingWrapper';
import { SearchField, JokesList, PaginationBar } from '../../components';

const MainPage = () => {
  return (
    <div className={styles.page}>
      <SearchField />
      <JokesList />
      <PaginationBar />
    </div>
  );
};

export default paddingWrapper(MainPage);
