import { FaRegUser } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdDateRange } from 'react-icons/md';
import { BsPersonVcard } from 'react-icons/bs';
import { PiWarningCircle } from 'react-icons/pi';
import { IoEye } from 'react-icons/io5';
import { IoEyeOff } from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';
import { IUserDto } from '../../dto/user.dto';
import { captureValue } from '../../helpers/captureInputValue';
import { registerUser } from '../../API/user.api';
import { checkAllInputs } from '../../helpers/checkAllInputs';
import { ILoguin } from '../../interfaces/loguin.interface';
import { checkEmailEntry } from '../../helpers/checkEmailEntry';
import { showPassword } from '../../helpers/showPassword';
import { restrictingNumbers } from '../../helpers/restrictingNumbers';
import ButtonPrimary from '../UI/ButtonPrimary';
import styles from './Register.module.css';
import Swal from 'sweetalert2';

const Register = ({
  allInputs,
  updateInputs,
  passwordVisibility,
  updatePassword,
}: ILoguin) => {
  const [formData, setFormData] = useState<IUserDto>({
    name: '',
    email: '',
    password: '',
    username: '',
    birthdate: '',
    nDni: '',
  });
  const formElement = useRef<HTMLFormElement>(null);
  const errorEmailEntry = useRef<HTMLSpanElement>(null);
  const passwordInputField = useRef<HTMLInputElement>(null);
  const nameInputField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    checkAllInputs(formData, updateInputs);
  }, [formData, updateInputs]);

  return (
    <div className={styles.register_container}>
      <h2>Crea una Cuenta</h2>
      <form
        name='register-form'
        ref={formElement}
        onSubmit={(e) => {
          e.preventDefault();
          formElement.current?.reset();
          registerUser(formData);
        }}
        className={styles.form}>
        <div className={styles.subcontainer_labels}>
          <label
            className={styles.label_item}
            htmlFor='name'>
            <span>
              <FaRegUser />
              Nombre <strong>*</strong>
            </span>
            <input
              className={styles.input_item}
              ref={nameInputField}
              id='name'
              autoComplete='off'
              name='name'
              type='text'
              maxLength={20}
              placeholder='Sebastian Perez'
              onChange={(e) => {
                restrictingNumbers(e, nameInputField);
                captureValue<IUserDto>(e, formData, setFormData);
              }}
            />
          </label>
          <label
            className={styles.label_item}
            htmlFor='username'>
            <span>
              <FaRegUser />
              Nombre de Usuario <strong>*</strong>
            </span>
            <input
              id='username'
              autoComplete='off'
              className={styles.input_item}
              name='username'
              type='text'
              maxLength={20}
              placeholder='SebaPerez90'
              onChange={(e) => captureValue<IUserDto>(e, formData, setFormData)}
            />
          </label>
        </div>

        <label
          className={styles.label_item}
          htmlFor='email'>
          <span>
            <MdOutlineMail />
            Email <strong>*</strong>
          </span>
          <input
            id='email'
            autoComplete='off'
            className={styles.input_item}
            name='email'
            type='text'
            placeholder='sebastian.alberto.perez@gmail.com'
            onChange={(e) => {
              checkEmailEntry(e, errorEmailEntry);
              captureValue<IUserDto>(e, formData, setFormData);
            }}
          />
          <span
            ref={errorEmailEntry}
            className={styles.email_span_message}>
            <PiWarningCircle />
            la dirección de email ingresada ser válida
          </span>
        </label>

        <label
          className={styles.label_item}
          htmlFor='password'>
          <span>
            <RiLockPasswordLine />
            Password <strong>*</strong>
          </span>
          <input
            ref={passwordInputField}
            className={styles.input_item}
            id='password'
            autoComplete='off'
            name='password'
            type='password'
            placeholder='*******'
            onChange={(e) => captureValue<IUserDto>(e, formData, setFormData)}
          />
          <span
            className={styles.show_password_icon}
            onClick={() =>
              showPassword(
                passwordVisibility,
                updatePassword,
                passwordInputField,
              )
            }>
            {passwordVisibility ? <IoEye /> : <IoEyeOff />}
          </span>
        </label>

        <div className={styles.subcontainer_labels}>
          <label
            className={styles.label_item}
            htmlFor='birthdate'>
            <span>
              <MdDateRange />
              Fecha Nacimiento <strong>*</strong>
            </span>
            <input
              id='birthdate'
              autoComplete='off'
              className={styles.input_item}
              name='birthdate'
              type='date'
              max='2024-01-01'
              placeholder='05/10/1990'
              onChange={(e) => captureValue<IUserDto>(e, formData, setFormData)}
            />
          </label>

          <label
            className={styles.label_item}
            htmlFor='nDni'>
            <span>
              <BsPersonVcard />
              Nº Cedula <strong>*</strong>
            </span>
            <input
              id='nDni'
              autoComplete='off'
              className={styles.input_item}
              name='nDni'
              type='number'
              maxLength={20}
              placeholder='35417882'
              onChange={(e) => captureValue<IUserDto>(e, formData, setFormData)}
            />
          </label>
        </div>

        <ButtonPrimary
          text='REGISTRATE'
          id='submit-btn'
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
          eventHandler={() => {
            Swal.fire({
              title: `Registrado Exitosamente!`,
              text: `Bienvenido a nuestra familia!`,
              icon: 'success',
            });
          }}
        />
      </form>
    </div>
  );
};

export default Register;
