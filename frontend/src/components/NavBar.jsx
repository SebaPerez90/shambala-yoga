import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/home"}>inicio</Link>
        </li>
        <li>
          <Link to={"/about"}>sobre nosotros</Link>
        </li>
        <li>
          <Link to={"/turns"}>turnos</Link>
        </li>
        <li>
          <Link to={"/loguin"}>inicia sesión</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
