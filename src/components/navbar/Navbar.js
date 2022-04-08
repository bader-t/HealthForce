import React from "react";
import './navbar.css'


const Navbar = () => (
    <nav>
        <div className="logo">
            <strong>Health</strong>Force
        </div>
        <ul className="nav-items">
            <li>
                <a href="/">Acceuil</a>
            </li>
            <li>
                <a href="/">Contact</a>
            </li>
            <li>
                <a className="active" href="/">S'authentifier</a>
            </li>
            <li>
                <a href="/">S'inscrire</a>
            </li>
        </ul>
    </nav>
);


export default Navbar;