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
    <div className="container bg-1">
      <Navbar active="rdv" status="unauthentified"></Navbar>
      <div>
        <div className="card">
          <h1>We early give best care to your health</h1>
          <Calendar
            onChange={onChange}
            value={value}
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

          {/* teste de valeure choisi*/ console.log(value)}
          <div className="btns">
            <Link to="/signup">Rendez-vous</Link>
            <a href="/">Services</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rdv;
