import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../authentification/Auth";

function Navbar(props) {
  const auth = useAuth();
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
      path: "rdv",
    },
    {
      label: "Deconnexion",
      path: "",
    },
    {
      label: auth.user,
      path: "profile",
    },
  ];

  return (
    <nav>
      <div className="logo">
        <strong>Health</strong>Force
      </div>
      <ul className="nav-items">
        {props.status === "authentified"
          ? authentified.map((item) => {
              return (
                <li key={item.label}>
                  <Link
                    key={item.label}
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
                <li key={item.label}>
                  <Link
                    key={item.label}
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
}

export default Navbar;
