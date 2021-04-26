import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const Navigation = ({selected}) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">   
        <NavDropdown title="Congress 117" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/senateMembers">Senate</NavDropdown.Item>
            <NavDropdown.Item href="/houseMembers">House</NavDropdown.Item>
        </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
);

export default Navigation;