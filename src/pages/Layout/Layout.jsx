import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return <div className={styles.layoutWrapper}>{<Outlet />}</div>;
};

export default Layout;
