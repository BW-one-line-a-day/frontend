import React, { useState } from "react";
import { Tab, Menu, Icon, Segment } from "semantic-ui-react";
import "./NavigationBar.scss";
import { NavLink } from "react-router-dom";

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

const createLabel = labelText => <span className="navTab">{labelText}</span>;

const todayLabel = createLabel("Today");
const yesterdayLabel = createLabel("Yesterday");
const calendarLabel = createLabel("All");
const outLabel = createLabel("Logout");

const panes = [
  {
    menuItem: (
      <Menu.Item key="today" as={Nav} to={`/today`} content={todayLabel} />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="yesterday"
        as={Nav}
        to={`/yesterday`}
        content={yesterdayLabel}
      />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="calendar"
        as={Nav}
        to={`/calendar`}
        content={calendarLabel}
        onClick={localStorage.clear()}
      />
    )
  },
  {
    menuItem: <Menu.Item key="calendar" as={Nav} to={`/`} content={outLabel} />
  }
];

const NavigationBar = () => <Tab panes={panes} renderActiveOnly={false} />;

export default NavigationBar;
