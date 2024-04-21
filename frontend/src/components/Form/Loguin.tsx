import { useEffect, useRef, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { PiLockKeyFill } from 'react-icons/pi';
import { IoEye } from 'react-icons/io5';
import { IoEyeOff } from 'react-icons/io5';
import { ILoguin } from '../../interfaces/loguin.interface';
import { checkAllInputs } from '../../helpers/checkAllInputs';
import { captureValue } from '../../helpers/captureInputValue';
import Modal from './Modal';
import { showPassword } from '../../helpers/showPassword';
import ButtonPrimary from '../UI/ButtonPrimary';
import useLogin from '../../hooks/useLogin';
import { ILoguinDto } from '../../dto/loguin.dto';
import styles from './Loguin.module.css';

const Loguin = ({
  conectionState,
  allInputs,
  updateInputs,
  passwordVisibility,
  updatePassword,
}: ILoguin) => {
  const { login } = useLogin();

  const formElement = useRef<HTMLFormElement>(null);
  const loguinRef = useRef<HTMLDivElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<ILoguinDto>({
    password: '',
    username: '',
  });

  useEffect(() => {
    loguinRef.current?.classList.add(`${styles.toggle_view_form}`);
  }, [conectionState]);

  useEffect(() => {
    checkAllInputs(formData, updateInputs);
  }, [formData, updateInputs]);

  return (
    <div
      ref={loguinRef}
      className={styles.loguin_container}>
      <h2>Inicia Sesión</h2>
      <form
        name='loguin-form'
        ref={formElement}
        onSubmit={(e) => {
          e.preventDefault();
          login(formData);
          formElement.current?.reset();
        }}
        method='POST'
        className={styles.form}>
        <label
          className={styles.label_item}
          htmlFor='username'>
          <FaUser />
          <input
            className={styles.input_item}
            autoComplete='off'
            id='username'
            name='username'
            type='text'
            placeholder='Username'
            onChange={(e) => captureValue(e, formData, setFormData)}
          />
        </label>

        <label
          className={styles.label_item}
          htmlFor='password'>
          <PiLockKeyFill />
          <input
            ref={passwordRef}
            className={styles.input_item}
            autoComplete='off'
            id='password'
            name='password'
            type='password'
            maxLength={16}
            placeholder='Password'
            onChange={(e) => captureValue(e, formData, setFormData)}
          />
          <span
            className={styles.show_password_icon}
            onClick={() =>
              showPassword(passwordVisibility, updatePassword, passwordRef)
            }>
            {passwordVisibility ? <IoEye /> : <IoEyeOff />}
          </span>
        </label>

        <div className={styles.subcontainer_loguin}>
          <label htmlFor='checkbox'>
            <input
              id='checkbox'
              name='checkbox'
              type='checkbox'
            />
            Recuerdame
          </label>
          <Modal />
        </div>

        <ButtonPrimary
          text='INICIA SESIÓN'
          id='submit-loguin-btn'
          conditionalStyles={
            allInputs
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
        />
      </form>
    </div>
  );
};

export default Loguin;
