import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import "./rdv.css";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import AuthService from "../../services/auth.service";
const dates = [
  new Date(2022, 3, 7),
  new Date(2022, 3, 25),
  new Date(2022, 4, 8),
];


function Rdv() {
  const user = AuthService.getCurrentUser();
  const [temps, setTemps] = useState("08:00");
  const [rdv, onChangeRDV] = useState(new Date());

  const onChangeTemps = (e) => {
    const temps = e.target.value;
    setTemps(temps);
    console.log(rdv.getDate() + "/" + (rdv.getMonth() + 1) + "/"
      + rdv.getFullYear())
  };


  return (
    <div className="container bg-2">
      <Navbar active="rdv" status="authentified"></Navbar>

      <div className="wrapperRdv">
        <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" className="cardRdv">

          <h1>Prendre un rendez-vous</h1>

          <hr />

          <input type="hidden" name="oid" value="00D8d000004IxgI" />
          <input type="hidden" name="retURL" value="https://healthforce-8640c.web.app/rdv" />

          <input type="hidden" name="first_name" value={"#existant# " + user.first_name} />
          <input type="hidden" name="last_name" value={user.last_name} />
          <input type="hidden" name="00N8d00000CeGhs" value={user.email} />
          <input type="hidden" name="phone" value={user.phone} />
          <input name="company" type="hidden" value={user.last_name} />
          <input name="lead_source" type="hidden" value="Web" />


          <div className="titles">
            <p className="subtitle">Selectionner la date </p>
            <p className="subtitle">Selectionner le temps </p>
          </div>

          <div className="row">
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


            <div className="column-2">
              <div className="row-radioRdv">
                <input type="radio" name="temps" value="08:00" onChange={onChangeTemps} />
                Matin
                <input type="radio" name="temps" value="14:00" onChange={onChangeTemps} />
                Apres-midi
              </div>
              <input name="00N8d00000CdSbQ" type="hidden" value={rdv.getDate() + "/" + (rdv.getMonth() + 1) + "/"
                + rdv.getFullYear() + ", " + temps} />


              <div className="Rdv-form">
                <input
                  type="text"
                  placeholder="Message(facultatif).."
                  name="description"
                  required
                />

              </div>
              <div className="row">
                <p className="subtitle">Rendez-vous pour:</p>
                <select id="00N8d00000CdSbf" name="00N8d00000CdSbf" title="Rendez-vous pour">
                  <option value="">--None--</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Operation">Operation</option>
                  <option value="Traitement">Traitement</option>
                </select>
              </div>
            </div>
          </div>

          <input className="submit-login" name="submit" type="submit" value="Rendez-vous" />
        </form>
      </div>
    </div>
  );
}

export default Rdv;
