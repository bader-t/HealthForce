import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import "./historique.css";

const Historique = () => (
  <div className="container bg-2">
    <Navbar active="historique" status="authentified"></Navbar>

    <div className="wrapper">
      <div className="card-Historique">
        <h1>S'authentifier</h1>
        <hr />
      </div>
    </div>
  </div>
);

export default Historique;
