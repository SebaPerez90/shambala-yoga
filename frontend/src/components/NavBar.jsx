import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = () => {
  return (
    <nav className='navbar-container'>
      <div className='nav-logo-container'>
        <span>Shambala</span> Yoga
      </div>

      <ul className='navegation-links'>
        <li>
          <Link to={'/'}>inicio</Link>
        </li>
        <li>
          <Link to={'/about'}>sobre nosotros</Link>
        </li>
        <li>
          <Link to={'/turns'}>turnos</Link>
        </li>
        <li>
          <Link to={'/form'}>inicia sesión</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
