import { yogaClases } from '../../helpers/yogaClases';
import styles from './ClasesCard.module.css';

const ClasesCard = () => {
  return (
    <div className={styles.container}>
      {yogaClases.map((item, key) => (
        <div
          key={key}
          className={styles.class_card}>
          <h2 className={styles.class_title}>{item.class}</h2>
          <p className={styles.class_description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ClasesCard;
