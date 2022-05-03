import { React, useEffect, useState } from "react";
import AuthService from "../../services/auth.service";
import EventBus from "../../common/EventBus";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  const profile = currentUser ? currentUser.username : "";
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
      label: profile,
      path: "profile",
    },
    {
      label: "Deconnexion",
      path: "login",
    },
  ];
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


  return (
    <nav>
      <div className="logo">
        <strong>Health</strong>Force
      </div>
      <ul className="nav-items">
        {currentUser
          ? authentified.map((item) => {
            if (item.label === 'Deconnexion') {
              return (
                <li key={item.label}>
                  <Link
                    key={item.label}
                    className={`nav-item ${props.active === item.path ? "active" : ""
                      }`}
                    onClick={logOut}
                    to={`/${item.path}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );

            }
            return (
              <li key={item.label}>
                <Link
                  key={item.label}
                  className={`nav-item ${props.active === item.path ? "active" : ""
                    }`}
                  to={`/${item.path}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          }

          )
          : unauthentified.map((item) => {
            return (
              <li key={item.label}>
                <Link
                  key={item.label}
                  className={`nav-item ${props.active === item.path ? "active" : ""
                    }`}
                  to={`/${item.path}`}
                >
                  {item.label}
                </Link>
              </li>
            )

              ;
          })}
      </ul>
    </nav>
  );
}

export default Navbar;
