import React from "react";
import "./detail-visite.css";

const DetailVisite = (props) => (
  <div className="description-visite">
    <div className="header-visite">
      <h3>{props.date}</h3>
    </div>
    <div className="main-visite">
      <div className="">
        <div className="col">
          <div className="First-col">
            <div className="prow">
              Poids en kg: <b>{props.poids}</b>
              <br />
            </div>
            <div className="prow">
              Temperature en C : <b>{props.temperature}</b>
              <br />
            </div>
          </div>

          <div className="second-col">
            <div className="prow">
              Tension en mmHg : <b>{props.tension}</b>
              <br />
            </div>
            <div className="prow">
              Glécimie en mg/dl: <b>{props.glecimie}</b>
              <br />
            </div>
          </div>
        </div>
      </div>
      <h3>Description:</h3>
      <p>{props.description}</p>
      <div>
        <h3>Consiels:</h3>

        <li>{props.consiels}</li>
      </div>
    </div>
    <div className="footer-visite">
      <button className="facture-button">Télécharger la facture</button>
    </div>
  </div>
);
export default DetailVisite;
