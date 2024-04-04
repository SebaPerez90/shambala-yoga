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
      <div className='header-container'>
        <h1>
          Aún no eres miembro, esta es tu Oportunidad !<br></br>
        </h1>
        <div className='description-message-cont'>
          <p>
            Es tu oportunidad de darle un giro a tu vida, recorda que cuerpo
            tenemos solo uno, cuidalo.<br></br>Una vida sin stress es posible!
            💚
          </p>
          Con un par de click podés tener acceso ilimitado a :
          <ul>
            <li>⚡ talleres sobre nuestras actividades.</li>
            <li>⚡ repetir las clases grabadas las veces que quieras.</li>
            <li>⚡ atención personalizada.</li>
            <li>⚡ importantes descuentos.</li>
          </ul>
        </div>
      </div>
      <div className='form-container'>
        <div
          id='sign-container'
          className='sign-container'>
          <div className='header-content'>
            <h2>
              {logued
                ? '¡Hola!, no estas registrad@? 🤔'
                : 'Bievenidos Nuevamente! 🙂'}
            </h2>
            <p>
              {logued
                ? 'podes hacerlo y disfrutar de nuestros plataforma con solo completar los campos con los datos requeridos.'
                : 'para mantenerte conectado ingresa con tu informacion personal.'}
            </p>
          </div>
          <button
            id='sign-btn'
            className='sign-in-btn'
            aria-label='sign-in-btn'
            onClick={changeViewForm}>
            {logued ? 'registrate' : 'inciar sesión'}
          </button>
        </div>
        {logued ? <Loguin state={logued} /> : <Register state={logued} />}
      </div>
    </section>
  );
};

export default Form;
