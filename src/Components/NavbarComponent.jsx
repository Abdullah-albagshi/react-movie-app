import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Search from './Common/SearchComponent';
const NavbarComponent = () => {
	return (
		<Navbar bg="light" expand="lg">
			<NavLink  aria-current="page" to="/" className='mr-3'>
				<Navbar.Brand className='logo '>Movie Book</Navbar.Brand>
			</NavLink>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<NavLink
							className="nav-link active"
							aria-current="page"
							to="/"
						>
							Popular Movies
						</NavLink>
					</li>
                    <li className="nav-item">
						<NavLink
							className="nav-link active"
							aria-current="page"
							to="/top-rated"
						>
							Top Rated Movies
						</NavLink>
					</li>
				</ul>
            <Search/>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarComponent;
