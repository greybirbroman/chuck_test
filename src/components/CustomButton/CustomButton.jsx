import styles from './CustomButton.module.css';

const CustomButton = ({ title, onClick, invert, disabled }) => {
  return (
    <button
      type='button'
      area-aria-label=''
      className={`${styles.button} ${invert ? styles.invert : styles.default}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default CustomButton;
