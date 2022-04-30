import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import axios from "axios";
import "./signup.css";

function Signup() {
  const [client, setUser] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    date: "",
    password: "",
    genre: "",
  });
  const navigate = useNavigate();
  function changeData(e) {
    setUser({ ...client, [e.target.name]: e.target.value });
    console.log(client);
  }
  function onSingUp() {
    axios.post("http://localhost:8082/addClient", client).then((result) => {
      console.log(result);
      if (result.data) {
        navigate("/login");
      }
    });
  }

  return (
    <div className="container bg-1">
      <Navbar active="signup" status="unauthentified"></Navbar>

      <div className="wrapper">
        <div className="card">
          <h1>S'inscrire</h1>
          <hr />
          <div className="row">
            <input
              className="login-input"
              type="text"
              name="nom"
              placeholder="nom.."
              onChange={changeData}
            />
            <input
              className="login-input"
              type="text"
              name="prenom"
              placeholder="prenom.."
              onChange={changeData}
            />
          </div>
          <div className="row">
            <input
              className="login-input"
              type="email"
              name="email"
              placeholder="email.."
              onChange={changeData}
            />
            <input
              className="login-input"
              type="text"
              name="telephone"
              placeholder="telephone.."
              onChange={changeData}
            />
          </div>
          <div className="row">
            <input
              className="login-input"
              type="date"
              name="date"
              onChange={changeData}
            />
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="password.."
              onChange={changeData}
            />
          </div>

          <div className="row-radio">
            <input
              type="radio"
              name="genre"
              value="femme"
              onChange={changeData}
            />
            Femme
            <input
              type="radio"
              name="genre"
              value="homme"
              onChange={changeData}
            />
            Homme
          </div>

          <button className="submit-login" onClick={onSingUp}>
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
