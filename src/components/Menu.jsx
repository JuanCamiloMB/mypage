import { motion } from "framer-motion";
import logo from "../assets/mylogogrey.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ProjectMenu() {
  return (
    <motion.nav
      initial={{ y: 100 + "%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        delay: 1.5,
      }}
    >
      <Link to="/" id="inicioLogo">
        <img src={logo} />
      </Link>
      <Link to="/" id="inicioTxt">
        <div>JuanK</div>
      </Link>
    </motion.nav>
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
