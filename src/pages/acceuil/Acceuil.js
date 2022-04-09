import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import "./acceuil.css";

const Acceuil = () => (
  <div className="container bg-1">
    <Navbar active="acceuil"></Navbar>
    <div className="acceuil">
      <div className="card">
        <h1>We early give best care to your health</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <div className="btns">
          <Link to="/signup">Rendez-vous</Link>
          <a href="/">Services</a>
        </div>
      </div>
    </div>
  </div>
);

export default Acceuil;
