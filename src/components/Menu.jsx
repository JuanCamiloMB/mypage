import logo from "../assets/mylogogrey.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ProjectMenu() {
  return (
    <nav>
      <Link to="/" id="inicioLogo">
        <img src={logo} />
      </Link>
      <Link to="/" id="inicioTxt">
        <div>JuanK</div>
      </Link>
    </nav>
  );
}

function Menu() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <nav>
      <Link to="/" id="inicioLogo">
        <img src={logo} />
      </Link>
      <Link to="/" id="inicioTxt">
        <div>JuanK</div>
      </Link>
      <Link
        to="/about"
        id="aboutBtn"
        style={
          path === "/about"
            ? { textDecoration: "underline" }
            : { textDecoration: "none" }
        }
      >
        About
      </Link>
    </nav>
  );
}

export { ProjectMenu, Menu };
