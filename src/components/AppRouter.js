import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Today from "./Today"
import Yesterday from "./Yesterday"
import Calendar from "./Calendar"

export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route path='/today' component={Today} />
      <Route path='/yesterday' component={Yesterday} />
      <Route path="/calendar" component={Calendar} />
    </Switch>
  </div>

}
