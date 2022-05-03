import React from "react";
import "./profile.css";
import { Navbar } from "../../components";
import AuthService from "../../services/auth.service";

const Profile = () => {
  const user = AuthService.getCurrentUser();

  return (
    <div className="container bg-2">
      <Navbar active="profile" status="authentified"></Navbar>
      <div className="profile">
        <div className="card-info">
          <h2>Information Generale</h2>

          <div className="col">
            <div className="First-col">
              <div className="row">
                Nom complet : <b>{user.username}</b>
                <br />
              </div>
              <div className="row">
                Date de naissance : <b>{user.date}</b>
                <br />
              </div>
              <div className="row">
                Sexe : <b>{user.genre}</b>
                <br />
              </div>
            </div>
            <div className="second-col">
              <div className="row">
                Telephone : <b>{user.telephone}</b>
                <br />
              </div>
              <div className="row">
                Adress : <b>Marrakech-Guiliz</b>
                <br />
              </div>
              <div className="row">
                CIN : <b>A456739</b>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="card-info">
          <h2>Informations medical</h2>

          <div className="col">
            <div className="First-col">
              <div className="row">
                Taille : <b>175cm</b>
                <br />
              </div>
              <div className="row">
                Poids : <b>78.4kg</b>
                <br />
              </div>
              <div className="row">
                Age : <b>35ans</b>
                <br />
              </div>
            </div>

            <div className="second-col">
              <div className="row">
                Couverture : <b>CNSS</b>
                <br />
              </div>
              <div className="row">
                Poids ideal : <b>75kg</b>
                <br />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
