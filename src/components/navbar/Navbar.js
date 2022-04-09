import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'


const Navbar = () => (
    <nav>
        <div className="logo">
            <strong>Health</strong>Force
        </div>
        <ul className="nav-items">
            <li>
                <Link className="nav-item" to="/">Acceuil</Link>
            </li>
            <li>
                <Link className="nav-item" to="/contact">Contact</Link>
            </li>
            <li>
                <Link className="nav-item" to="/login">S'authentifier</Link>
            </li>
            <li>
                <Link className="nav-item" to="/signup">S'inscrire</Link>
            </li>
        </ul>
    </nav>
);


export default Navbar;