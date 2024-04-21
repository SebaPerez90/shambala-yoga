import { useState } from 'react';
import { faq } from '../../helpers/faq';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';
import styles from './Faq.module.css';

const Faq = () => {
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

  const displayAnswer = (id: number) => {
    if (activeQuestionId === id) {
      setActiveQuestionId(null);
    } else {
      setActiveQuestionId(id);
    }
  };

  return (
    <div className={styles.main_container}>
      {faq.map((item) => (
        <div
          className={styles.faq_container}
          key={item.id}>
          <div
            className={styles.faq_question}
            id={item.id.toString()}
            onClick={() => displayAnswer(item.id)}>
            {item.question}
            <span>
              <IoIosArrowDown />
            </span>
          </div>

          <AnimatePresence>
            {activeQuestionId === item.id && (
              <motion.p
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: -15 }}
                exit={{ opacity: 0, y: -50 }}
                className={styles.faq_answer}>        
                {item.answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Faq;
