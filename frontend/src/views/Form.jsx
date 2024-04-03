import { useState } from 'react';

import Loguin from '../components/Loguin';
import Register from '../components/Register';

import '../styles/form.css';

const Form = () => {
  const [logued, setLogued] = useState(false);

  const changeViewForm = () => {
    const element = document.getElementById('sign-container');

    element.classList.toggle('sign-up');
    setLogued(!logued);
  };

  return (
    <section className='main-container'>
      <div
        id='sign-container'
        className='sign-container'>
        <div className='header-content'>
          <h2>
            {logued
              ? '¡Hola!, no te registraste?'
              : 'Bievenidos Nuevamente! 🙂'}
          </h2>
          <p>
            {logued
              ? 'podes hacerlo y disfrutar de nuestros plataforma con solo completar los campos con los datos requeridos.'
              : 'para mantenerte conectado ingresa con tu informacion personal.'}
          </p>
        </div>
        <button
          id='sign-in-btn'
          aria-label='sign-in-btn'
          onClick={changeViewForm}>
          {logued ? 'registrate' : 'inciar sesión'}
        </button>
      </div>
      {logued ? <Loguin state={logued} /> : <Register state={logued} />}
    </section>
  );
};

export default Form;
