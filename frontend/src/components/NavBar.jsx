import { Link } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import '../styles/navbar.css';
import icon from '../assets/icon.png';

const NavBar = () => {
  return (
    <nav className='navbar-container'>
      <div className='nav-logo-container'>
        <img
          src={icon}
          alt='icon'
          width={40}
          height={40}
        />
        <span>Shambala Yoga</span>
      </div>

      <ul className='navegation-links'>
        <li>
          <Link to={'/'}>
            <IoMdHome />
          </Link>
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
