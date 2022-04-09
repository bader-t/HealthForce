import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Visite, DetailVisite } from "../../components";
import "./historique.css";
const visites = [
  {
    date: "Jeudi 31 mars 2022",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte...",
  },
  {
    date: "Jeudi 31 mars 2022",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte...",
  },
  {
    date: "Jeudi 31 mars 2022",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte...",
  },
  {
    date: "Jeudi 31 mars 2022",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte...",
  },
  {
    date: "Jeudi 31 mars 2022",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte...",
  },
  {
    date: "Jeudi 31 mars 2022",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte...",
  },
];

const Historique = () => (
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
                <Visite
                  date={item.date}
                  description={item.description}
                ></Visite>
              );
            })}
          </div>
          <DetailVisite></DetailVisite>
        </div>
      </div>
    </div>
  </div>
);

export default Historique;
