import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MyTurns from './views/MyTurns/MyTurns';
import Home from './views/Home/Home';
import Appointments from './views/Appointments/Appointments';
import Form from './views/Form/Form';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './global.css';
import Schedule from './views/Schedule/Schedule';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/appointments'
            element={<Appointments />}
          />
          <Route
            path='/turns'
            element={<Schedule />}
          />
          <Route
            path='/myturns'
            element={<MyTurns />}
          />
          <Route
            path='/form'
            element={<Form />}
          />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
};

export default App;
