import { GrFacebookOption } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import styles from './SocialNetworks.module.css';

const SocialNetworks = () => {
  return (
    <ul className={styles.networks_container}>
      <li className={styles.list_item}>
        <a
          className={styles.facebook}
          aria-label='social-network'
          href=''
          target='_blank'>
          <GrFacebookOption />
        </a>
      </li>
      <li className={styles.list_item}>
        <a
          className={styles.instagram}
          aria-label='social-network'
          href=''
          target='_blank'>
          <GrInstagram />
        </a>
      </li>
      <li className={styles.list_item}>
        <a
          className={styles.email}
          aria-label='social-network'
          href=''
          target='_blank'>
          <MdOutlineEmail />
        </a>
      </li>
      <li className={styles.list_item}>
        <a
          className={styles.whatsapp}
          aria-label='social-network'
          href=''
          target='_blank'>
          <BsWhatsapp />
        </a>
      </li>
    </ul>
  );
};

export default SocialNetworks;
