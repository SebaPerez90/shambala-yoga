import { useRef, MouseEvent, useState, useEffect } from 'react';
import { scheduleAvailables } from '../../helpers/schedulesAvailables';
import { TbClockHour4 } from 'react-icons/tb';
import { ITimePicker } from '../../interfaces/timepiker.interface';
import styles from './TimePicker.module.css';

const TimePicker = ({ selectedSchedule, setSelectedSchedule }: ITimePicker) => {
  const [scheduleID, setScheduleID] = useState<string>();
  const [prevScheduleID, setPrevScheduleID] = useState<string>();
  const scheduleContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    for (let i = 0; i < scheduleAvailables.length; i++) {
      if (scheduleAvailables[i].id === scheduleID) {
        setSelectedSchedule(scheduleAvailables[i].schedule);
      }
    }

    if (scheduleID) {
      if (prevScheduleID) {
        const previousElement = document.getElementById(prevScheduleID);
        if (previousElement) {
          previousElement.style.backgroundColor = '';
          previousElement.style.color = '';
        }
      }

      const currentElement = document.getElementById(scheduleID);
      if (currentElement) {
        currentElement.style.backgroundColor = '#7e8dff';
        currentElement.style.color = '#fff';
        setPrevScheduleID(scheduleID);
      }
    }
  }, [prevScheduleID, scheduleID, selectedSchedule, setSelectedSchedule]);

  const selectSchedule = async (e: MouseEvent<HTMLSpanElement>) => {
    const currentElement = (e.target as HTMLSpanElement).id;
    setScheduleID(currentElement);
  };

  const slideEffect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const currentElement = (e.target as HTMLButtonElement).id;

    currentElement === 'prev-button'
      ? (scheduleContainer.current!.scrollLeft -= 150)
      : (scheduleContainer.current!.scrollLeft += 150);
  };

  return (
    <div className={styles.main_container}>
      <span>
        <TbClockHour4 />
        Horario Disponibles<strong>*</strong>
      </span>
      <button
        className={styles.prev_btn}
        id='prev-button'
        aria-label='prev-button'
        onClick={(e) => slideEffect(e)}>
        {'<'}
      </button>
      <button
        className={styles.next_btn}
        id='next-button'
        aria-label='next-button'
        onClick={(e) => slideEffect(e)}>
        {'>'}
      </button>
      <div className={styles.wraper}>
        <div
          ref={scheduleContainer}
          className={styles.schedule_container}>
          {scheduleAvailables.map((item) => (
            <span
              key={item.id}
              id={item.id}
              onClick={(e) => selectSchedule(e)}
              className={styles.schedule_item}>
              {item.schedule}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
