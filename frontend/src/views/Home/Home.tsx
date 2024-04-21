import SocialNetworks from '../../components/UI/SocialNetworks';
import video from '../../assets/video.mov';
import styles from './Home.module.css';
import ClasesCard from '../Appointments/ClasesCard';

const Home = () => {
  return (
    <>
      <main className={styles.hero_section}>
        <h1 className={styles.title}>
          <span>SHAMBALA</span> <br></br>YOGA
        </h1>
        <div className={styles.book_container}>
          <p>
            Vivir una vida libre de estrés, es posible.<br></br> Consigue tu
            primera clase de yoga gratis!
          </p>
          <button className={styles.hero_btn}>comienza ahora</button>
        </div>

        <video
          className={styles.video}
          autoPlay
          loop
          muted
          src={video}></video>

        <SocialNetworks />
      </main>
      <div className={styles.pepe}>
        <h1>Nuestro Servicios</h1>
        <ClasesCard />
      </div>
    </>
  );
};

export default Home;
