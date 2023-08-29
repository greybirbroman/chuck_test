import { BallTriangle } from 'react-loader-spinner';
import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color='#656ec2'
        ariaLabel='ball-triangle-loading'
        visible={true}
      />
    </div>
  );
}

export default Loader;
