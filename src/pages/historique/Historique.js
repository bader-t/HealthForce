import React from "react";
import { Navbar, Visite, DetailVisite } from "../../components";
import "./historique.css";
import { useState, useEffect } from "react";
import axios from "axios";

const visites = [
  {
    date: "Jeudi 31 mars 2022",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte...",
    id: 0,
    conseils: [
      "chreeb dwaak amskhot lwalidin",
      "bla bla bla",
      "g3eed l2erd chwiya",
    ],
  },
  {
    date: "Vendredi 1 mars 2022",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte...",
    id: 1,
    conseils: ["chreeb dwaak amskhot lwalidin", "g3eed l2erd chwiya"],
  },
  {
    date: "Mardi 1 Avril 2022",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte...",
    id: 2,
    conseils: [
      "chreeb dwaak amskhot lwalidin",
      "lbess mezian rah derbek lberd",
      "g3eed l2erd chwiya",
    ],
  },
  {
    date: "Jeudi 10 juin 2022",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte...",
    id: 3,
    conseils: ["g3eed l2erd chwiya"],
  },
  {
    date: "mardi 4 janvier 2023",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte...",
    id: 4,
    conseils: ["lbess mezian rah fr3eek lberd", "g3eed l2erd chwiya"],
  },
  {
    date: "Jeudi 11 mars 2023",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte...",
    id: 5,
    conseils: ["chreeb dwaak amskhot lwalidin"],
  },
];

function Historique() {
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
          url: "https://healthforce4-dev-ed.my.salesforce.com/services/apexrest/visites",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tocken,
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const [idVisite, handleChange] = useState(1);
  const visiteToShow = visites.filter((item) => item.id === idVisite);

  return (
    <div className="container bg-2">
      <Navbar active="historique" status="authentified"></Navbar>

      <div className="wrapper">
        <div className="card-Historique">
          <h1>Historique des visites</h1>
          <hr />
          <div className="visite-container">
            <div className="list-of-visites">
              {visites.map((item) => {
                return (
                  <div className="conteneur-visite" key={item.id}>
                    <Visite
                      date={item.date}
                      description={item.description}
                    ></Visite>
                    <div className="button-container">
                      <button
                        className="detail-button"
                        onClick={() => handleChange(item.id)}
                      >
                        Voir details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <DetailVisite
              date={visiteToShow[0].date}
              description={visiteToShow[0].description}
              consiels={visiteToShow[0].conseils}
            ></DetailVisite>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Historique;
