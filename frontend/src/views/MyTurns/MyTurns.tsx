import { useEffect, useState } from 'react';
import { getUserByID } from '../../API/user.api';
import { useAppSelector } from '../../app/hooks';
import { ITurns } from '../../interfaces/turns.interface';
import styles from './MyTurns.module.css';
import { useNavigate } from 'react-router-dom';

const MyTurns = () => {
  const login = useAppSelector((state) => state.loguin);
  const navigate = useNavigate();
  const [myTurns, setMyTurns] = useState<ITurns[] | null>(null);

  useEffect(() => {
    if (login.loginState === 'FALSE' || login.loginState.length === 0) {
      navigate('/form');
    }
  }, [login.loginState, navigate]);

  useEffect(() => {
    getUserByID(login.userID, setMyTurns);
  }, [login.userID]);

  return (
    <div className={styles.list_container}>
      <div className={styles.colum_names}>
        <p className={styles.col}>Clase</p>
        <p className={styles.col}>Teléfono</p>
        <p className={styles.col}>Fecha</p>
        <p className={styles.col}>Horario</p>
        <p className={styles.col}>Descripción</p>
        <p className={styles.col}>Estado</p>
      </div>
      {myTurns?.map((item) => (
        <div
          className={styles.list_item}
          key={item.id}>
          <p
            aria-label='class'
            className={styles.item}>
            {item.class}
          </p>
          <p
            aria-label='phone'
            className={styles.item}>
            {item.phone}
          </p>
          <time
            aria-label='date'
            className={styles.item}>
            {item.date}
          </time>
          <span
            aria-label='time'
            className={styles.item}>
            {item.time}
          </span>
          <p
            aria-label='descriptiom'
            className={styles.item}>
            {item.description}
          </p>
          <span
            aria-label='status'
            style={
              item.status === 'inactive'
                ? { color: '#f00' }
                : { color: '#2fa92f' }
            }
            className={styles.item}>
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MyTurns;
