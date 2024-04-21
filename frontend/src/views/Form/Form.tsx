import { useRef, useState } from 'react';
import Loguin from '../../components/Form/Loguin';
import Register from '../../components/Form/Register';
import styles from './Formm.module.css';

const Form = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [logued, setLogued] = useState<boolean>(false);
  const [missingData, setMissingData] = useState<boolean>(true);

  const divRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const changeViewForm = () => {
    divRef.current?.classList.toggle(`${styles.sign_up}`);
    formRef.current!.style.animation = 'dropShadow 600ms ease-out reverse';

    setTimeout(() => {
      formRef.current!.style.removeProperty('animation');
    }, 600);

    setLogued(!logued);
  };

  return (
    <section className={styles.main_container}>
      <div className={styles.header_container}>
        <h1>Aún no eres miembro? Esta es tu Oportunidad !</h1>
        <div className={styles.description_message_cont}>
          <p>
            Es momento de darle un giro a tu vida, recorda que cuerpo tenemos
            solo uno, cuidalo.<br></br>Una vida sin stress es posible! 💚
          </p>
          Con un par de click podés tener acceso ilimitado a :
          <ul>
            <li>⚡ talleres sobre nuestras actividades.</li>
            <li>⚡ ver las clases grabadas las veces que quieras.</li>
            <li>⚡ atención personalizada.</li>
            <li>⚡ importantes descuentos.</li>
          </ul>
        </div>
      </div>
      <div
        ref={formRef}
        className={styles.form_container}>
        <div
          ref={divRef}
          className={styles.sign_container}>
          <div className={styles.header_content}>
            <h2>
              {logued
                ? `¡Hola!, no estas registrado? 🤔`
                : 'Bievenidos Nuevamente! 🙂'}
            </h2>
            <p>
              {logued
                ? 'Hazlo y disfrutá de nuestros servicios solamente completando los campos con los datos requeridos.'
                : 'para mantenerte conectado ingresa con tu informacion personal.'}
            </p>
          </div>
          <button
            id='sign-btn'
            className={styles.sign_in_btn}
            aria-label='sign-in-btn'
            onClick={changeViewForm}>
            {logued ? 'registrate' : 'inciar sesión'}
          </button>
        </div>
        {logued ? (
          <Loguin
            conectionState={logued}
            allInputs={missingData}
            updateInputs={setMissingData}
            passwordVisibility={visibility}
            updatePassword={setVisibility}
          />
        ) : (
          <Register
            allInputs={missingData}
            updateInputs={setMissingData}
            passwordVisibility={visibility}
            updatePassword={setVisibility}
          />
        )}
      </div>
    </section>
  );
};

export default Form;
