import React from "react";
import { Navbar, Visite, DetailVisite } from "../../components";
import "./historique.css";
import { useState } from "react";
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
