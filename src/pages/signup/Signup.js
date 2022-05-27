import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import AuthService from "../../services/auth.service";
import "./signup.css";

function Signup() {

  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangeTelephone = (e) => {
    const telephone = e.target.value;
    setTelephone(telephone);
  };
  const onChangeGenre = (e) => {
    const genre = e.target.value;
    setGenre(genre);
  };
  const onChangeDate = (e) => {
    const date = e.target.value;
    setDate(date);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    AuthService.register(username, email, password, telephone, date, genre).then(
      (response) => {
        setMessage(response.data.message);
        navigate("/login");
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
      <Navbar active="signup" status="unauthentified"></Navbar>

      <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" className="wrapper">
        <div className="card">
          <h1>S'inscrire</h1>
          <hr />
          <input type="hidden" name="oid" value="00D8d000004IxgI" />
          <input type="hidden" name="retURL" value="http://127.0.0.1:3000/login" />
          <div className="row">

            <input
              className="login-input"
              type="text"
              name="last_name"
              placeholder="nom.."
              onChange={onChangeUsername}
            />
            <input
              className="login-input"
              type="text"
              name="first_name"
              placeholder="prénom.."
              onChange={onChangeUsername}
            />

          </div>
          <div className="row">
            <input
              className="login-input"
              type="email"
              name="email"
              placeholder="email.."
              onChange={onChangeEmail}
            />
            <input
              className="login-input"
              type="text"
              name="telephone"
              placeholder="telephone.."
              onChange={onChangeTelephone}
            />
          </div>
          <div className="row">
            <input
              className="login-input"
              type="date"
              name="date"
              onChange={onChangeDate}
            />
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="password.."
              onChange={onChangePassword}
            />
          </div>

          <div className="row-radio">
            <input
              type="radio"
              name="genre"
              value="femme"
              onChange={onChangeGenre}
            />
            Femme
            <input
              type="radio"
              name="genre"
              value="homme"
              onChange={onChangeGenre}
            />
            Homme
          </div>
          <input name="00N8d00000CdSbQ" type="date" />

          <input className="submit-login" name="submit" type="submit" value="S'inscrire" />
        </div>
      </form>
    </div>
  );
}

export default Signup;
