import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import "./rdv.css";
import BookingCalendar from 'react-booking-calendar';

const bookings = [
    new Date(2022, 4, 1),
    new Date(2022, 4, 2),
    new Date(2022, 4, 3),
    new Date(2022, 4, 9),
    new Date(2022, 4, 10),
    new Date(2022, 4, 11),
    new Date(2022, 4, 12),
];

const Rdv = () => (
    <div className="container bg-1">
        <Navbar active="rdv" status="unauthentified"></Navbar>
        <div >
            <div className="card">
                <h1>We early give best care to your health</h1>
                <BookingCalendar clickable="true" bookings={bookings} />
                <div className="btns">
                    <Link to="/signup">Rendez-vous</Link>
                    <a href="/">Services</a>
                </div>
            </div>
        </div>
    </div>
);

export default Rdv;
