import React from "react";
import { Navbar } from "../../components";
import './login.css'


const Login = () => (
    <div className="container bg-1">
        <Navbar>
        </Navbar>
        <div className="wrapper">
            <div className="card">
                <h1>S'authentifier</h1>
                <hr />
                <form className="login-form">
                    <input type="email" placeholder="email.." name="email" required />
                    <input type="password" placeholder="mot de passe.." name="mdp" required />
                    <input type="submit" value="S'authentifier" />
                </form>
            </div>
        </div>


    </div>
);


export default Login;