import React from "react";
import { Link } from "react-router-dom";
import "./visite.css";

const Visite = (props) => (
  <div className="historique-item">
    <div className="header">
      <h3>{props.date}</h3>
      <a href="#">Voir details --&gt;</a>
    </div>
    <p>{props.description}</p>
  </div>
);
export default Visite;
