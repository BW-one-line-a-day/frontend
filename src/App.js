//IMPORT REACT
import React from "react";
//IMPORT STYLES
import "./App.css";
//IMPORT DEPENDENCIES/LIBRARIES
import { NavLink, BrowserRouter, Route } from "react-router-dom";
//IMPORT COMPONENTS
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavLink to="/signup">Register</NavLink> */}
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
