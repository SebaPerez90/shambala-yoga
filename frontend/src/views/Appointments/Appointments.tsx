import ButtonPrimary from '../../components/UI/ButtonPrimary';
import { useEffect, useRef, useState } from 'react';
import { MdLocalPhone } from 'react-icons/md';
import { MdDateRange } from 'react-icons/md';
import { captureValue } from '../../helpers/captureInputValue';
import { IAppointmentDto } from '../../dto/appointment.dto';
import { checkAllInputs } from '../../helpers/checkAllInputs';
import { lengthTextControl } from '../../helpers/lengthChartControl';
import { IDate } from '../../interfaces/date.interface';
import TimeInput from './TimePicker';
import styles from './Appointments.module.css';
import ClasesCard from './ClasesCard';
import { createAppointment } from '../../API/appointment.api';
import { useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Appointments = () => {
  const loguin = useAppSelector((state) => state.loguin);
  const navigate = useNavigate();

  const formElement = useRef<HTMLFormElement>(null);

  const [selectedSchedule, setSelectedSchedule] = useState<string>('');
  const [missingData, setMissingData] = useState<boolean>(true);
  const [textAreaLength, setTextAreaLength] = useState<number>(0);
  const [formData, setFormData] = useState<IAppointmentDto>({
    time: '',
    date: '',
    description: '',
    phone: 0,
    class: '',
    userID: 0,
  });

  const [currentDate, setCurrentDate] = useState<IDate>({
    minBookingDate: 0,
    maxBookingDate: 0,
  });

  useEffect(() => {
    if (loguin.loginState === 'FALSE' || loguin.loginState.length === 0) {
      navigate('/form');
    }
  }, [loguin.loginState, navigate]);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      userID: Number(loguin.userID),
    }));
  }, [loguin.userID]);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      time: selectedSchedule,
    }));
  }, [selectedSchedule]);

  useEffect(() => {
    checkAllInputs(formData, setMissingData);
  }, [formData, setMissingData]);

  useEffect(() => {
    const date: Date = new Date();
    const bookDate: number = date.getDate();

    setCurrentDate({
      minBookingDate: bookDate + 1,
      maxBookingDate: bookDate + 14,
    });
  }, []);

  return (
    <div className={styles.main_container}>
      <ClasesCard />
      <form
        ref={formElement}
        id='appointment-form'
        name='appointment-form'
        onSubmit={(e) => {
          e.preventDefault();
          createAppointment(formData);
          formElement.current?.reset();
        }}
        className={styles.form_container}>
        <div className={styles.subcontainer_labels}>
          <label
            className={styles.label_item}
            htmlFor='class'>
            <span>Clase Selecionada</span>
            <input
              className={styles.input_item}
              autoComplete='off'
              id='class'
              name='class'
              type='text'
              onChange={(e) =>
                captureValue<IAppointmentDto>(e, formData, setFormData)
              }
            />
          </label>

          <label
            className={styles.label_item}
            htmlFor='userID'>
            <span>ID</span>
            <input
              className={styles.input_item}
              autoComplete='off'
              id='userID'
              name='userID'
              type='number'
              value={formData.userID}
              onChange={(e) =>
                captureValue<IAppointmentDto>(e, formData, setFormData)
              }
            />
          </label>
        </div>

        <TimeInput
          selectedSchedule={selectedSchedule}
          setSelectedSchedule={setSelectedSchedule}
        />
        <div className={styles.subcontainer_labels}>
          <label
            className={styles.label_item}
            htmlFor='date'>
            <span>
              <MdDateRange />
              Fecha <strong>*</strong>
            </span>
            <input
              className={styles.input_item}
              autoComplete='off'
              id='date'
              name='date'
              type='date'
              min={`2024-04-${currentDate.minBookingDate}`}
              max={
                currentDate.maxBookingDate > 30
                  ? '2024-04-30'
                  : `2024-04-${currentDate.maxBookingDate}`
              }
              onChange={(e) =>
                captureValue<IAppointmentDto>(e, formData, setFormData)
              }
            />
          </label>

          <label
            className={styles.label_item}
            htmlFor='phone'>
            <span>
              <MdLocalPhone />
              Teléfono <strong>*</strong>
            </span>
            <input
              id='phone'
              autoComplete='off'
              className={styles.input_item}
              name='phone'
              type='number'
              placeholder='1132830699'
              onChange={(e) =>
                captureValue<IAppointmentDto>(e, formData, setFormData)
              }
            />
          </label>
        </div>
        <div className={styles.label_item}>
          <textarea
            className={styles.textarea_input}
            maxLength={150}
            autoComplete='off'
            id='description'
            name='description'
            placeholder='Cuentame tus espectativas...'
            onChange={(e) => {
              captureValue<IAppointmentDto>(e, formData, setFormData);
              lengthTextControl(e, setTextAreaLength);
            }}></textarea>
          <span className={styles.textarea_length}>{textAreaLength}/150</span>
        </div>

        <ButtonPrimary
          text='RESERVA'
          id='submit-turn-btn'
          conditionalStyles={
            missingData
              ? {
                  pointerEvents: 'none',
                  filter: 'grayscale(2)',
                  transition: 'all 400ms',
                }
              : {
                  pointerEvents: 'all',
                  filter: 'grayscale(0)',
                  transition: 'all 400ms',
                }
          }
          eventHandler={() =>
            Swal.fire({
              title: 'Reserva Exitosa!',
              text: `podes ver mas en "Mis Turnos"`,
              icon: 'success',
            })
          }
        />
      </form>
    </div>
  );
};

export default Appointments;
