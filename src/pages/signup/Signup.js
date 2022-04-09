import React from "react";
import { Navbar } from "../../components";
import "./signup.css";

const Signup = () => (
  <div className="container bg-1">
    <Navbar active="signup"></Navbar>

    <div className="wrapper">
      <div className="card">
        <h1>S'inscrire</h1>
        <hr />
        <form className="signup-form">
          <div className="row">
            <input type="text" name="name" placeholder="nom.." />
            <input type="text" name="prenom" placeholder="prenom.." />
          </div>
          <div className="row">
            <input type="email" name="name" placeholder="email.." />
            <input type="number" name="prenom" placeholder="telephone.." />
          </div>
          <div className="row">
            <input type="date" name="date" placeholder="20/20/2020" />
            <input type="text" name="ville" placeholder="ville.." />
          </div>

          <div className="row-radio">
            <input type="radio" name="gender" value="femme" />
            Femme
            <input type="radio" name="gender" value="homme" />
            Homme
          </div>

          <input type="submit" value="S'inscrire" />
        </form>
      </div>
    </div>
  </div>
);

export default Signup;
