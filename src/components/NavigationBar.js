<<<<<<< HEAD
import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
=======
import React, { useState } from 'react'
import { Tab, Menu, Icon, Segment } from 'semantic-ui-react'
>>>>>>> master
import { NavLink } from "react-router-dom";

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

<<<<<<< HEAD
const createLabel = (iconName, labelText) => (
  <span>
    <Icon name={iconName} />
    {labelText}
  </span>
);

const todayLabel = createLabel("users", "Today");
const yesterdayLabel = createLabel("building", "Yesterday");
const calendarLabel = createLabel("video", "Calendar");
=======
const todayLabel = createLabel("write square", "Today")
const yesterdayLabel = createLabel("book", "Yesterday")
const calendarLabel = createLabel("calendar alternate outline", "Calendar")
>>>>>>> master

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
      />
    )
  }
];

const NavigationBar = () => <Tab panes={panes} renderActiveOnly={false} />;

export default NavigationBar;
