import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Today from "./Today";
import Yesterday from "./Yesterday";
import Calendar from "./Calendar";
import NavigationBar from "./NavigationBar";

export default function AppRouter() {
  return (
    <div className="page-view ui bottom attached segment active tab">
      <NavigationBar />
      <Switch>
        <NavLink to="/today">Today</NavLink>
        {/* <Route path="/today" component={Today} />
        <Route path="/yesterday" component={Yesterday} />
        <Route path="/calendar" component={Calendar} /> */}
      </Switch>
    </div>
  );
}
