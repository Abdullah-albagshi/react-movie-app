import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
const NavbarComponent = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<NavLink
							className="nav-link active"
							aria-current="page"
							to="/"
						>
							Movies
						</NavLink>
					</li>
				</ul>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarComponent;
