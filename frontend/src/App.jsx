import './styles/global.css';

import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import MyTurns from './views/MyTurns';
import Home from './views/Home';
import About from './views/About';
import Form from './views/Form';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/turns'
          element={<MyTurns />}
        />
        <Route
          path='/form'
          element={<Form />}
        />
      </Routes>
    </>
  );
};

export default App;
