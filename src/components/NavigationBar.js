import React from 'react'
import { Tab, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>


const todayLabel = createLabel("users", "Today")
const yesterdayLabel = createLabel("building", "Yesterday")
const calenderLabel = createLabel("video", "Calender")

const panes = [
	{ menuItem: <Menu.Item key='today' as={Nav} to={`/today`} content={todayLabel} /> },
	{ menuItem: <Menu.Item key='yesterday' as={Nav} to={`/yesterday`} content={yesterdayLabel} /> },
	{ menuItem: <Menu.Item key='calender' as={Nav} to={`/calender`} content={calenderLabel} /> }
]

const NavigationBar = () => <Tab panes={panes} renderActiveOnly={false} />

export default NavigationBar
