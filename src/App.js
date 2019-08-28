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
import AppRouter from "./components/AppRouter";
import NavigationBar from "./components/NavigationBar";
import Yesterday from "./components/Yesterday";
import Calendar from "./components/Calendar";
import Today from "./components/Today";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <AppRouter /> */}
        {/* <NavigationBar /> */}

        {/* <NavLink to="/signup">Register</NavLink> */}
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/yesterday" component={Yesterday} />
        <Route path="/calendar" component={Calendar} />
        <PrivateRoute exact path="/today" component={Today} />
      </BrowserRouter>
    </div>
  );
}

export default App;
