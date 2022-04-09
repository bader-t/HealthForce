import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => (
  <nav>
    <div className="logo">
      <strong>Health</strong>Force
    </div>
    <ul className="nav-items">
      <li>
        <Link
          className={`nav-item ${props.active === "acceuil" ? "active" : ""}`}
          to="/"
        >
          Acceuil
        </Link>
      </li>
      <li>
        <Link
          className={`nav-item ${props.active === "contact" ? "active" : ""}`}
          to="/contact"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          className={`nav-item ${props.active === "login" ? "active" : ""}`}
          to="/login"
        >
          S'authentifier
        </Link>
      </li>
      <li>
        <Link
          className={`nav-item ${props.active === "signup" ? "active" : ""}`}
          to="/signup"
        >
          S'inscrire
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
