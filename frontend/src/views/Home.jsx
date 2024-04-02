import { useRef } from 'react';
import '../styles/home.css';

const Home = () => {
  const myRef = useRef(null);

  return (
    <div
      onClick={() => console.log(myRef)}
      ref={myRef}>
      home component
    </div>
  );
};

export default Home;
