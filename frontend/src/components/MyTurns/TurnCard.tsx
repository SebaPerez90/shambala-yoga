import { useState } from 'react';
import { myTurns } from '../../helpers/myTurns';
import styles from './Turns.module.css';

const TurnCard = () => {
  const [turns] = useState(myTurns);

  return (
    <>
      {turns.map((item) => (
        <div
          className={styles.turn_card}
          key={item.id}>
          <span>{item.description}</span>
          <span>{item.status}</span>
          <time>{item.date}</time>
          <span>{item.time}</span>
        </div>
      ))}
    </>
  );
};

export default TurnCard;
