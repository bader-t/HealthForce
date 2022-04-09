import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const unauthentified = [
  {
    label: "Acceuil",
    path: "",
  },
  {
    label: "Contact",
    path: "contact",
  },
  {
    label: "S'authentifier",
    path: "login",
  },
  {
    label: "S'inscrire",
    path: "signup",
  },
];
const authentified = [
  {
    label: "Acceuil",
    path: "home",
  },
  {
    label: "Historique des visites",
    path: "historique",
  },
  {
    label: "Poser une question",
    path: "question",
  },
  {
    label: "Rendez-vous",
    path: "appointment",
  },
  {
    label: "Hakim Alaoui",
    path: "profile",
  },
];
const Navbar = (props) => (
  <nav>
    <div className="logo">
      <strong>Health</strong>Force
    </div>
    <ul className="nav-items">
      {props.status === "authentified"
        ? authentified.map((item) => {
            return (
              <li>
                <Link
                  className={`nav-item ${
                    props.active === item.path ? "active" : ""
                  }`}
                  to={`/${item.path}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })
        : unauthentified.map((item) => {
            return (
              <li>
                <Link
                  className={`nav-item ${
                    props.active === item.path ? "active" : ""
                  }`}
                  to={`/${item.path}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
    </ul>
  </nav>
);

export default Navbar;
