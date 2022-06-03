import React from "react";
import { Navbar, Visite, DetailVisite } from "../../components";
import "./historique.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

function Historique() {
  const [idVisite, handleChange] = useState("");
  const [listOfVisites, setList] = useState([]);
  const [visiteToShow, setVisite] = useState([]);
  const parseDate = (date) => {
    let dateJs = new Date(date);
    const JOURS = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];
    const MOIS = [
      "Janvier",
      "Fevrier",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Aout",
      "Septembre",
      "Octobre",
      "Novembre",
      "Decembre",
    ];

    let mois = MOIS[parseInt(dateJs.getMonth())];
    let jour = JOURS[parseInt(dateJs.getDay())];
    let annee = dateJs.getFullYear();
    return jour + " " + dateJs.getDate() + " " + mois + " " + annee;
  };
  useEffect(() => {
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
          url: "https://healthforce4-dev-ed.my.salesforce.com/services/apexrest/visites/0038d000008xmhfAAA",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tocken,
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data[0]));
            setList(response.data);
            setVisite(
              response.data.filter(
                (element) => element.Id === response.data[0].Id
              )
            );
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
    <div className="container bg-2">
      <Navbar active="historique" status="authentified"></Navbar>

      <div className="wrapper">
        <div className="card-Historique">
          <h1>Historique des visites</h1>
          <hr />
          <div className="visite-container">
            <div className="list-of-visites">
              {listOfVisites.map((item) => {
                return (
                  <div className="conteneur-visite" key={item.Id}>
                    <Visite
                      name={item.Name}
                      date={parseDate(item.LastModifiedDate.split("T")[0])}
                      description={item.Description}
                    ></Visite>
                    <div className="button-container">
                      <button
                        className="detail-button"
                        onClick={() => {
                          handleChange(item.Id);
                          console.log(item.Id, "test");
                          setVisite(
                            listOfVisites.filter(
                              (element) => element.Id === item.Id
                            )
                          );
                        }}
                      >
                        Voir details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            {visiteToShow.length !== 0 && (
              <DetailVisite
                date={parseDate(visiteToShow[0].LastModifiedDate.split("T")[0])}
                description={visiteToShow[0].Description}
                consiels={visiteToShow[0].Consiels__c}
                poids={visiteToShow[0].Poid_kg__c}
                glecimie={visiteToShow[0].Gl_cimie_en_mg_dl__c}
                temperature={visiteToShow[0].Temperature_en_C__c}
                tension={visiteToShow[0].Tension__c}
              ></DetailVisite>
            )}
          </div>
        </div>
      </div>
      <p></p>
    </div>
  );
}

export default Historique;
