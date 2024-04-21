import { IButton } from '../../interfaces/button.interface';
import styles from './Buttons.module.css';

const ButtonPrimary = ({
  text,
  id,
  conditionalStyles,
  eventHandler,
}: IButton) => {
  return (
    <button
      id={id}
      style={conditionalStyles}
      className={styles.submit_btn}
      aria-label={id}
      onClick={eventHandler}>
      {text}
    </button>
  );
};

export default ButtonPrimary;
