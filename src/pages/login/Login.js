import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../components";
import "./login.css";
import AuthService from "../../services/auth.service";


function Login() {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();


    setMessage("");

    AuthService.login(username, password).then(
      () => {
        navigate("/home");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);


      }
    );
  };
  console.log(message);


  return (
    <div className="container bg-1">
      <Navbar active="login" status="unauthentified"></Navbar>
      <div className="wrapper">
        <div className="card">
          <h1>S'authentifier</h1>
          <hr />

          <input
            type="text"
            placeholder="nom complet.."
            name="username"
            value={username}
            onChange={onChangeUsername}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="mot de passe.."
            name="password"
            value={password}
            onChange={onChangePassword}
            className="login-input"
            required
          />

          <button onClick={handleLogin} className="submit-login">
            S'authentifier
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
