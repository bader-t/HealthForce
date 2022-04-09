import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import "./home.css";

const Home = () => (
    <div className="container bg-2">
        <Navbar active="home" status="authentified"></Navbar>
        <div className="home">
            <div className="title">
                <h1>Soins de qualité<br /><span>à votre vie</span></h1>

                <p>Soins professionnels pour votre santé</p>
            </div>
        </div>
        <div className="footer">
            <div><span>Heures de travail</span>&nbsp;&nbsp; Lundi - Vendredi 9:00 - 17:00</div>
            <div><img src="./assets/phone.svg" alt="phone" />&nbsp;&nbsp;+212 5 23 24 12 45</div>
            <div>réclamation <img src="./assets/chevron.svg" alt="chevron" /></div>
        </div>
    </div>
);

export default Home;
