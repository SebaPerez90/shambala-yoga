import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/home"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/about"}>Sobre Nosotros</Link>
        </li>
        <li>
          <Link to={"/turns"}>Mis Turnos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
