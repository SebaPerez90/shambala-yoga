import '../styles/home.css';
import video from '../assets/video.mov';
import SocialNetworks from '../components/SocialNetworks';

const Home = () => {
  return (
    <main className='hero-section'>
      <h1 className='title'>
        <span>SHAMBALA</span> <br></br>YOGA
      </h1>
      <div className='book-container'>
        <p>
          Vivir una vida libre de estrés, es posible.<br></br> Consigue tu
          primera clase de yoga gratis!
        </p>
        <button className='hero-btn'>comienza ahora</button>
      </div>

      <video
        className='video'
        autoPlay
        loop
        muted
        src={video}></video>

      <SocialNetworks />
    </main>
  );
};

export default Home;
