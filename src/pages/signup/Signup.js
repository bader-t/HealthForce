import { React, useState } from "react";
import { Calendar } from "react-calendar";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import AuthService from "../../services/auth.service";
import "./signup.css";

const dates = [
  new Date(2022, 3, 7),
  new Date(2022, 3, 25),
  new Date(2022, 4, 8),
];

function Signup() {

  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [genre, setGenre] = useState("");
  const [temps, setTemps] = useState("08:00");
  const [date, setDate] = useState("");
  const [rdv, onChangeRDV] = useState(new Date());
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
  const onChangeTemps = (e) => {
    const temps = e.target.value;
    setTemps(temps);
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
      <div className="card-container">
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
                name="phone"
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
                name="salutation"
                value="Mrs."
                onChange={onChangeGenre}
              />
              Femme
              <input
                type="radio"
                name="salutation"
                value="Mr."
                onChange={onChangeGenre}
              />
              Homme
            </div>
            <div className="row">

              <p className="subtitle">Selectionner la date<br />
                <input type="radio" name="temps" value="08:00" onChange={onChangeTemps} />
                Matin<br />
                <input type="radio" name="temps" value="14:00" onChange={onChangeTemps} />
                Apres-midi </p>

              <Calendar
                onChange={onChangeRDV}
                value={rdv}
                tileDisabled={({ date }) =>
                  dates.some(
                    (disabledDate) =>
                      (date.getFullYear() === disabledDate.getFullYear() &&
                        date.getMonth() === disabledDate.getMonth() &&
                        date.getDate() === disabledDate.getDate()) ||
                      date.getDay() === 0 ||
                      date.getDay() === 6
                  )
                }
              />
            </div>
            <div className="row">
              <p className="subtitle">Rendez-vous pour:</p>
              <select id="00N8d00000CdSbf" name="00N8d00000CdSbf" title="Rendez-vous pour"><option value="">--None--</option><option value="Consultation">Consultation</option>
                <option value="Operation">Operation</option>
                <option value="Traitement">Traitement</option>
              </select>
            </div>

            <input name="00N8d00000CdSbQ" type="hidden" value={rdv.getDate() + "/" + (rdv.getMonth() + 1) + "/"
              + rdv.getFullYear() + ", " + temps} />

            <input className="submit-login" name="submit" type="submit" value="S'inscrire" />
          </div>
        </form>
      </div>


    </div>
  );
}

export default Signup;
