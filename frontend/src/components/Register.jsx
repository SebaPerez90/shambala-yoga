import { FaRegUser } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import '../styles/form.css';

const Register = () => {
  return (
    <div className='sign-up-container'>
      <h2>Crea una Cuenta</h2>
      <form
        id='register-form'
        className='register-form-container'>
        <label
          className='label-item'
          htmlFor='full-name'>
          <span>
            <FaRegUser />
            Nombre Completo <strong>*</strong>
          </span>
          <input
            autoComplete='off'
            id='full-name'
            className='input-item'
            name='full-name'
            type='text'
            placeholder='Sebastian Perez'
          />
        </label>
        <label
          className='label-item'
          htmlFor='email-address'>
          <span>
            <MdOutlineMail />
            Email <strong>*</strong>
          </span>
          <input
            autoComplete='off'
            id='email-address'
            className='input-item'
            name='email-address'
            type='text'
            placeholder='sebastian.alberto.perez@gmail.com'
          />
        </label>
        <label
          className='label-item'
          htmlFor='password'>
          <span>
            <RiLockPasswordLine />
            Password <strong>*</strong>
          </span>
          <input
            autoComplete='off'
            id='password'
            className='input-item'
            name='password'
            type='password'
            placeholder='*******'
          />
        </label>
        <button
          id='submit-btn'
          className='submit-btn'
          aria-label='submit-btn'>
          REGISTRATE
        </button>
      </form>
    </div>
  );
};

export default Register;
