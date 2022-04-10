import React from "react";
import "./detail-visite.css";

const DetailVisite = (props) => (
  <div className="description-visite">
    <div className="header-visite">
      <h3>{props.date}</h3>
    </div>
    <div className="main-visite">
      <p>{props.description}</p>
      <div>
        <h3>Conseils:</h3>
        {props.consiels.map((item) => (
          <li>{item}</li>
        ))}
      </div>
    </div>
    <div className="footer-visite">
      <button className="facture-button">Télécharger la facture</button>
    </div>
  </div>
);
export default DetailVisite;
