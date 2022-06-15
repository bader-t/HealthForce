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

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [genre, setGenre] = useState("");
  const [temps, setTemps] = useState("08:00");
  const [date, setDate] = useState(new Date());
  const [rdv, onChangeRDV] = useState(new Date());
  const [message, setMessage] = useState("");

  const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };
  const onChangeLastname = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
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
    const date = new Date(e.target.value);
    setDate(date);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    AuthService.register(firstname, email, telephone, date, genre).then(
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
        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
          method="POST"
          className="wrapper"
        >
          <div className="card">
            <h1>S'inscrire</h1>
            <hr />
            <input type="hidden" name="oid" value="00D8d000004IxgI" />
            <input
              type="hidden"
              name="retURL"
              value="https://healthforce-8640c.web.app/login"
            />
            <div className="row">
              <input
                className="login-input"
                type="text"
                name="last_name"
                placeholder="nom.."
                onChange={onChangeFirstname}
              />
              <input
                className="login-input"
                type="text"
                name="first_name"
                placeholder="prénom.."
                onChange={onChangeLastname}
              />
            </div>
            <div className="row">
              <input
                className="login-input"
                type="text"
                name="00N8d00000CeGhs"
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
              <p className="subtitle">
                Selectionner la date
                <br />
                <input
                  type="radio"
                  name="temps"
                  value="08:00"
                  onChange={onChangeTemps}
                />
                Matin
                <br />
                <input
                  type="radio"
                  name="temps"
                  value="14:00"
                  onChange={onChangeTemps}
                />
                Apres-midi{" "}
              </p>

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
              <select
                id="00N8d00000CdSbf"
                name="00N8d00000CdSbf"
                title="Rendez-vous pour"
              >
                <option value="">--None--</option>
                <option value="Consultation">Consultation</option>
                <option value="Operation">Operation</option>
                <option value="Traitement">Traitement</option>
              </select>
            </div>

            <input
              name="00N8d00000CdSbQ"
              type="hidden"
              value={
                rdv.getDate() +
                "/" +
                (rdv.getMonth() + 1) +
                "/" +
                rdv.getFullYear() +
                ", " +
                temps
              }
            />
            <input name="lead_source" type="hidden" value="Web" />
            <input
              name="00N8d00000CeEwD"
              type="hidden"
              value={
                date.getDate() +
                "/" +
                (date.getMonth() + 1) +
                "/" +
                date.getFullYear()
              }
            />
            <input name="company" type="hidden" value={lastname} />

            <input
              className="submit-login"
              name="submit"
              type="submit"
              value="S'inscrire"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
