import styles from './CustomButton.module.css';

/**
 * Кастомная кнопка.
 * @param {Object} props - Пропсы компонента.
 * @param {string} props.title - Текст на кнопке.
 * @param {function} props.onClick - Обработчик клика.
 * @param {boolean} props.invert - Инвертировать стили кнопки.
 * @param {boolean} props.disabled - Отключить кнопку.
 * @returns {JSX.Element} Компонент кнопки.
 */

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
