import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className="navbar">
			<NavLink exact to={'/'}>
				Smurf Home
			</NavLink>
			<NavLink to={'/smurf-form'}>Smurf Form</NavLink>
		</div>
	);
};
export default NavBar;
