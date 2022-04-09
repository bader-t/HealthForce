import React from "react";
import { Acceuil, Home, Login, Rdv, Signup, Historique, Question } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route oute path="/" element={<Acceuil />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/rdv" element={<Rdv />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/historique" element={<Historique />}></Route>
        <Route path="/question" element={<Question />}></Route>
      </Routes>
    </Router>
  </div>
);

export default App;
