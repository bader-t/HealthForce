import { React, useState } from "react";

import { Navbar } from "../../components";
import axios from "axios";
import { Route, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/authentification/Auth";
import "./login.css";

function Login() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const auth = useAuth();

  function changeLogInData(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function onLogin() {
    axios.post("http://localhost:8082/login", loginData).then((result) => {
      console.log(result);
      if (result.data) {
        auth.login(loginData.username);
        navigate("/home");
      } else alert("wrong login");
    });
  }

  return (
    <div className="container bg-1">
      <Navbar active="login" status="unauthentified"></Navbar>
      <div className="wrapper">
        <div className="card">
          <h1>S'authentifier</h1>
          <hr />

          <input
            type="text"
            placeholder="email.."
            name="username"
            value={loginData.username}
            onChange={changeLogInData}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="mot de passe.."
            name="password"
            value={loginData.password}
            onChange={changeLogInData}
            className="login-input"
            required
          />

          <button onClick={onLogin} className="submit-login">
            S'authentifier
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
