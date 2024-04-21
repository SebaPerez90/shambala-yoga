import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Modal.module.css';

const Modal = () => {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <div
      className={styles.main_container}
      onClick={() => setDisplay(!display)}>
      <span className={styles.forget_password}>Olvidaste tu contraseña?</span>
      <AnimatePresence>
        {display && (
          <motion.div
            transition={{
              duration: 0.2,
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className={styles.modal_container}>
            <h2>Ingresa tu Email</h2>
            <label htmlFor='email'>
              Email:
              <input
                autoComplete='off'
                id='email'
                name='email'
                type='text'
              />
            </label>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modal;
