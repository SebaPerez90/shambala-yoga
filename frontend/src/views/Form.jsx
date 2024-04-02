import { useState } from 'react';

import Loguin from '../components/Loguin';
import Register from '../components/Register';

import '../styles/form.css';

const Form = () => {
  const [logued, setLogued] = useState(false);

  const changeViewForm = () => {
    const element = document.getElementById('main-container');
    console.log(element);
    setLogued(!logued);
  };

  return (
    <section
      id='main-container'
      className='main-container'>
      <div className='sign-container'>
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
      {logued ? <Loguin /> : <Register />}
    </section>
  );
};

export default Form;
