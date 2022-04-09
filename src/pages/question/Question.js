import React from "react";
import { Navbar } from "../../components";
import "./question.css";

const Question = () => (
    <div className="container bg-2">
        <Navbar active="question" status="authentified"></Navbar>
        <div className="wrapper">
            <div className="card">
                <h1>Poser une question</h1>
                <hr />
                <form className="question-form">
                    <input type="text" placeholder="question.." name="question" required />

                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </div>
    </div>
);

export default Question;
