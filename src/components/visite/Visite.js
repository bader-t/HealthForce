import React from "react";
import "./visite.css";

const Visite = (props) => (
  <div className="historique-item">
    <div className="header">
      <h3>{props.date}</h3>
    </div>
    <p>{props.name}</p>
    <h5>Description</h5>
    <p>{props.description}</p>
  </div>
);
export default Visite;
