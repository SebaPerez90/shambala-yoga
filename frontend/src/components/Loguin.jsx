import { MdOutlineMail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';

const Loguin = () => {
  return (
    <div className='loguin-container'>
      <h2>Inicia Sesión</h2>
      <form
        id='register-form'
        className='form-container'>
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
          INICIA SESIÓN
        </button>
      </form>
    </div>
  );
};

export default Loguin;
