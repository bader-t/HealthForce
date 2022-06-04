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
          <h2>Information Personelle</h2>

          <div className="col">
            <div className="First-col">
              <div className="prow">
                Nom complet :{" "}
                <b>
                  {user.first_name} {user.last_name}
                </b>
                <br />
              </div>
              <div className="prow">
                Date de naissance : <b>{user.birth_date}</b>
                <br />
              </div>

              <div className="prow">
                Assurance médicale : <b>{user.assurance_medical}</b>
                <br />
              </div>
              <div className="prow">
                Email : <b>{user.email}</b>
                <br />
              </div>
            </div>
            <div className="second-col">
              <div className="prow">
                Telephone : <b>{user.phone}</b>
                <br />
              </div>
              <div className="prow">
                Adress : <b>{user.adress}</b>
                <br />
              </div>
              <div className="prow">
                Num de l'assurance : <b>{user.num_assurance}</b>
                <br />
              </div>
              <div className="prow">
                CIN : <b>{user.cin}</b>
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
