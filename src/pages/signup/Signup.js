import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import AuthService from "../../services/auth.service";
import "./signup.css";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, setOptions, localeFr } from "@mobiscroll/react";

setOptions({
  locale: localeFr,
  theme: "ios",
  themeVariant: "light",
});

function Signup() {
  let navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [genre, setGenre] = useState("");
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
  /////////////////////////////////////////////////////
  const [listOfRendezVous, setList] = useState([]);
  let toDay = new Date();
  toDay.setTime(toDay.getTime() + 12 * 3600 * 1000);

  const user = AuthService.getCurrentUser();
  const changeDate = (e) => {
    console.log(rdv.getDate());
    console.log(
      "first",
      rdv.getDate() +
        "/" +
        (rdv.getMonth() + 1) +
        "/" +
        rdv.getFullYear() +
        ", " +
        rdv.getHours() +
        ":" +
        rdv.getMinutes()
    );
    onChangeRDV(e.value);
  };
  const setlistOfRendezVous = (element) => {
    listOfRendezVous.push({
      start: element,
      end: element,
    });
  };

  const myLabels = React.useMemo(() => {
    return [
      {
        start: "2022-06-26",
        textColor: "#e1528f",
        title: "",
      },
    ];
  }, []);

  useEffect(() => {
    let url =
      "https://healthforce4-dev-ed.my.salesforce.com/services/apexrest/rendezVous";
    var axios = require("axios");
    var data =
      "grant_type=password&client_id=3MVG9DREgiBqN9WldxY6Si.pmECMxRaJPIwYtCUX49AMTbWpVlPj4vUzTHRKHQdpj7k9_bvI5eCUXoxDdFjy5&client_secret=D9B701D4A2BD6510AB7BC6B1AE11B688A7A63F6F451048450ECB57187CA44AAD\r\n&username=healthforce8@gmail.com&password=healthforce@@1Bf6YIt9844TiLMt2t2V81JQh\r\n";

    var config = {
      method: "post",
      url: "https://login.salesforce.com/services/oauth2/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.access_token));
        var tocken = response.data.access_token;
        var axios = require("axios");
        var FormData = require("form-data");
        var data = new FormData();
        var config = {
          method: "get",
          url: url,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tocken,
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            let i = 0;
            for (i; i < response.data.length; i++) {
              console.log(
                JSON.stringify(response.data[i].Date_de_rendez_vous__c)
              );
              if (response.data[i].Date_de_rendez_vous__c !== undefined)
                setlistOfRendezVous(response.data[i].Date_de_rendez_vous__c);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
              value="http://127.0.0.1:3000/login/"
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
              <p className="subtitle">prendre la date de rendez-vous:</p>
              <div>
                <Datepicker
                  controls={["calendar", "timegrid"]}
                  min={toDay}
                  max="2022-12-16T00:00"
                  minTime="09:00 AM"
                  maxTime="14:00 PM"
                  stepMinute={30}
                  labels={myLabels}
                  invalid={listOfRendezVous}
                  onChange={changeDate}
                  dataTimezone="utc+1"
                />
              </div>
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
                rdv.getHours() +
                ":" +
                rdv.getMinutes()
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
