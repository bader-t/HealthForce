import React from "react";
import { Navbar } from "../../components";
import "./question.css";
import AuthService from "../../services/auth.service";

const Question = () => {
  const user = AuthService.getCurrentUser();

  console.log(user.email);

  return (
    <div className="container bg-2">
      <Navbar active="question" status="authentified"></Navbar>
      <div className="wrapper">
        <div className="card">
          <h1>Poser une question</h1>
          <hr />

          <form
            className="question-form"
            action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8"
            method="POST"
          >
            <input type="hidden" name="orgid" value="00D8d000004IxgI" />
            <input type="hidden" name="retURL" value="http://www.google.com" />
            <input
              id="email"
              value={user.email}
              maxlength="80"
              name="email"
              size="20"
              type="hidden"
            />

            <label for="subject">Subject</label>
            <input
              placeholder="Taper le sujet.."
              id="subject"
              maxlength="80"
              name="subject"
              size="20"
              type="text"
            />
            <br />

            <label for="description">Description</label>
            <textarea
              rows="4"
              name="description"
              placeholder="Taper une description.."
            ></textarea>
            <br />

            <label for="priority">Priority</label>
            <select id="priority" name="priority">
              <option value="">--None--</option>
              <option value="High">Elevée</option>
              <option value="Medium">Moyen</option>
              <option value="Low">Faible</option>
            </select>
            <br></br>

            <input type="submit" name="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Question;
