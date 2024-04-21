import { useEffect, useState } from 'react';
import { getAllTurns } from '../../API/appointment.api';
import { ITurnsDto } from '../../interfaces/turns.interface';
import styles from './Schedule.module.css';

const Schedule = () => {
  const [allTurns, setAllTurns] = useState<ITurnsDto[]>();

  useEffect(() => {
    getAllTurns(setAllTurns);
  }, []);

  return (
    <div className={styles.main_container}>
      <h1 className={styles.title}>Cronograma</h1>
      <div className={styles.colum_names}>
        <h2 className={styles.col}>Detalles de Turnos</h2>
        <h2 className={styles.col}>Detalles de Usuarios</h2>
      </div>
      {allTurns?.map((item, key) => (
        <div
          key={key}
          className={styles.turns_container}>
          <div className={styles.turns_info}>
            <span>
              <strong>Clase:</strong>
              {item.class}
            </span>
            <span>
              <strong>ID turno:</strong>
              {item.id}
            </span>
            <time>
              <strong>Fecha:</strong>
              {item.date}
            </time>
            <span>
              <strong>Horario</strong>
              {item.time}
            </span>
            <span>
              <strong>Estado:</strong>
              {item.status}
            </span>
          </div>
          <div className={styles.user_info_container}>
            <span>
              <strong>nombre:</strong>
              {item.user.name}
            </span>
            <span>
              <strong>email:</strong>
              {item.user.email}
            </span>
            <span>
              <strong>nacimiento:</strong>
              {item.user.birthdate}
            </span>
            <span>
              <strong>DNI:</strong>
              {item.user.nDni}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
