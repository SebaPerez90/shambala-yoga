import SocialNetworks from '../UI/SocialNetworks';
import Faq from './Faq';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <Faq />
      <div className={styles.logo_container}>
        <p>
          <span>Shambala</span> Yoga
        </p>
        <SocialNetworks />
      </div>
    </div>
  );
};

export default Footer;
