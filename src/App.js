import React from "react";
import { Acceuil, Login } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => (
  <div>
    <Router>
      <Routes>
        <Route oute path="/" element={<Acceuil />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  </div>

);


export default App;