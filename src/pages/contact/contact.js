import React from "react";
import { Navbar, Visite, DetailVisite } from "../../components";
import "./contact.css";
import { useState } from "react";
import { Card } from "../../components";

const cards = [
  
  {
    title: "Notre Debut",
    desc: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte...",
    id: 0,
    url: "https://firebasestorage.googleapis.com/v0/b/auth-healthforce.appspot.com/o/Debut.png?alt=media&token=33dc536d-c919-494d-9a12-3582f963daec",
  },

  {
    title: "Nos services",
    desc: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte...",
    id: 1,
    url: "https://firebasestorage.googleapis.com/v0/b/auth-healthforce.appspot.com/o/service.png?alt=media&token=2e741324-bc42-41a7-a3c5-1bd42fa6e674",
  },
  {
    title: "Nos specialités",
    desc: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte...",
    id: 2,
    url: "https://firebasestorage.googleapis.com/v0/b/auth-healthforce.appspot.com/o/speciality.png?alt=media&token=b23d21f4-9096-44e3-a245-518b8c0d96d7",
  },
];

const contact = () => {
 
  return (
    
    <div className="container bg-1">
      <Navbar active="contact" status="unauthentified"></Navbar>

      <div className="list-of-cards" >
        {cards.map((item) => {
          return <Card title={item.title} desc={item.desc} imgUrl={item.url} />;
        })}
      </div>

      <div className="footer">
        <div>
          <span>Heures de travail</span>&nbsp;&nbsp; Lundi - Vendredi 9:00 -
          17:00
        </div>
        <div>
          <img src="./assets/phone.svg" alt="phone" />
          &nbsp;&nbsp;+212 5 23 24 12 45
        </div>
        <div>
          Réserver <img src="./assets/chevron.svg" alt="chevron" />
        </div>
      </div>
    </div>
  );
};

export default contact;
