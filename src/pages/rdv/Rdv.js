import React from "react";
import { Navbar } from "../../components";
import "./rdv.css";
import { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import AuthService from "../../services/auth.service";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, setOptions, localeFr } from "@mobiscroll/react";

setOptions({
  locale: localeFr,
  theme: "ios",
  themeVariant: "light",
});

function Rdv() {
  const [listOfRendezVous, setList] = useState([]);
  let toDay = new Date();
  toDay.setTime(toDay.getTime() + 12 * 3600 * 1000);

  const user = AuthService.getCurrentUser();
  const [rdv, onChangeRDV] = useState(new Date());
  const changeDate = (e) => {
    console.log(
      rdv.getDate() +
        "/" +
        (rdv.getMonth() + 1) +
        "/" +
        rdv.getFullYear() +
        ", " +
        rdv.getHours() +
        ":" +
        rdv.getMinutes()
    );
    onChangeRDV(e.value);
  };
  const setlistOfRendezVous = (element) => {
    listOfRendezVous.push({
      start: element,
      end: element,
    });
  };
  //////////////////////////////////////////////////////
  function submitForm() {
    var form = document.getElementById("salesforce_form");
    form.action += "http://localhost:3000/rdv"; // notice the case
    form.submit(); // submit the form
  }
  const myLabels = React.useMemo(() => {
    return [
      {
        start: "2022-06-26",
        textColor: "#e1528f",
        title: "",
      },
    ];
  }, []);
  useEffect(() => {
    let url =
      "https://healthforce4-dev-ed.my.salesforce.com/services/apexrest/rendezVous";
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
          url: url,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tocken,
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            let i = 0;
            for (i; i < response.data.length; i++) {
              console.log(
                JSON.stringify(response.data[i].Date_de_rendez_vous__c)
              );
              if (response.data[i].Date_de_rendez_vous__c !== undefined)
                setlistOfRendezVous(response.data[i].Date_de_rendez_vous__c);
            }
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
      <Navbar active="rdv" status="authentified"></Navbar>

      <div className="wrapperRdv">
        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
          method="POST"
          className="cardRdv"
        >
          <h1>Prendre un rendez-vous</h1>

          <hr />

          <input type="hidden" name="oid" value="00D8d000004IxgI" />
          <input
            type="hidden"
            name="retURL"
            value="http://127.0.0.1:3000/rdv/"
          />

          <input
            type="hidden"
            name="first_name"
            value={"#existant# " + user.first_name}
          />
          <input type="hidden" name="last_name" value={user.last_name} />
          <input type="hidden" name="00N8d00000CeGhs" value={user.email} />
          <input type="hidden" name="phone" value={user.phone} />
          <input name="company" type="hidden" value={user.last_name} />
          <input name="lead_source" type="hidden" value="Web" />
          <input
            name="00N8d00000CdSbQ"
            type="hidden"
            value={
              rdv.getDate() +
              "/" +
              (rdv.getMonth() + 1) +
              "/" +
              rdv.getFullYear() +
              ", " +
              rdv.getHours() +
              ":" +
              rdv.getMinutes()
            }
          />

          <div className="titles">
            <p className="subtitle">Selectionner la date </p>
          </div>

          <div className="row">
            <div>
              <Datepicker
                controls={["calendar", "timegrid"]}
                min={toDay}
                max="2022-12-16T00:00"
                minTime="09:00 AM"
                maxTime="14:00 PM"
                stepMinute={30}
                labels={myLabels}
                invalid={listOfRendezVous}
                onChange={changeDate}
                dataTimezone="utc+1"
              />
            </div>
            <div className="column-2">
              <div className="Rdv-form">
                <input
                  type="text"
                  placeholder="Message(facultatif).."
                  name="description"
                  required
                />
              </div>
              <div className="row">
                <p className="subtitle">Rendez-vous pour:</p>
                <select
                  id="00N8d00000CdSbf"
                  name="00N8d00000CdSbf"
                  title="Rendez-vous pour"
                >
                  <option value="">--None--</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Operation">Operation</option>
                  <option value="Traitement">Traitement</option>
                </select>
              </div>
            </div>
          </div>

          <input
            className="submit-login"
            name="submit"
            type="submit"
            value="Rendez-vous"
            onClick={submitForm}
          />
        </form>
      </div>
    </div>
  );
}

export default Rdv;
