import React from "react";
import {
  Acceuil,
  Home,
  Login,
  Rdv,
  Signup,
  Historique,
  Question,
  Contact
} from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { RequireAuth } from "./components/requireAuth/RequireAuth";

const App = () => (

  <div>
    <Router>
      <Routes>
        <Route oute path="/" element={<Acceuil />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/rdv"
          element={
            <RequireAuth>
              <Rdv />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/historique"
          element={
            <RequireAuth>
              <Historique />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/question"
          element={
            <RequireAuth>
              <Question />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </Router>
  </div>

);

export default App;
