import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { storeUserID, updateSesion } from '../../features/loguin.slice';
import { TbLogin2 } from 'react-icons/tb';
import { TbLogout2 } from 'react-icons/tb';

const NavBar = () => {
  const dispatch = useDispatch();
  const loguin = useAppSelector((state) => state.loguin);
  return (
    <nav className={styles.navbar_container}>
      <div className={styles.nav_logo_container}>
        <span>Shambala</span> Yoga
      </div>

      <ul className={styles.navegation_links}>
        <li>
          <Link to={'/'}>inicio</Link>
        </li>
        <li>
          <Link to={'/turns'}>cronograma</Link>
        </li>
        <li>
          <Link to={'/myturns'}>mis turnos</Link>
        </li>

        {loguin.loginState === 'TRUE' ? (
          <>
            <li>
              <Link to={'/appointments'}>reserva tu clase</Link>
            </li>
            {/* <li>
              <Link to={'/myturns'}>mis turnos</Link>
            </li> */}
            <button
              id='logout-btn'
              aria-label='logout-btn'
              className={styles.logout_btn}
              onClick={() => {
                dispatch(storeUserID(''));
                dispatch(updateSesion('FALSE'));
              }}>
              <TbLogout2 />
              cerrar sesión
            </button>
          </>
        ) : (
          <li>
            <Link
              className={styles.login_btn}
              to={'/form'}>
              <TbLogin2 />
              contectarse
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
