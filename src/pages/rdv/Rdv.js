import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import "./rdv.css";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
const dates = [
  new Date(2022, 3, 7),
  new Date(2022, 3, 25),
  new Date(2022, 4, 8),
];
function Rdv() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="container bg-2">
      <Navbar active="rdv" status="authentified"></Navbar>

      <div className="wrapperRdv">
        <div className="cardRdv">
          <h1>Prendre un rendez-vous</h1>

          <hr />

          <div className="titles">
            <p className="subtitle">Selectionner la date </p>
            <p className="subtitle">Selectionner le temps </p>
          </div>

          <div className="row">
            <Calendar
              onChange={onChange}
              value={value}
              tileDisabled={({ date }) =>
                dates.some(
                  (disabledDate) =>
                    /*il faut ajouter les jours feriers*/
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
                <input type="radio" name="temps" value="matin" />
                Matin
                <input type="radio" name="temps" value="apres-midi" />
                Apres-midi
              </div>

              <form className="Rdv-form">
                <input
                  type="text"
                  placeholder="Message(facultatif).."
                  name="question"
                  required
                />
              </form>
            </div>
          </div>

          {/* teste de valeure choisi*/ console.log(value)}

          <div className="btns">
            <Link to="/signup">Rendez-vous</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rdv;
