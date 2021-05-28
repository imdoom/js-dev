import React from 'react';
import { Navbar, Nav, NavDropdown, DropdownButton } from 'react-bootstrap';

const Navigation = ({setChamber}) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="dropdowns">   
        <NavDropdown title="Congress 117" id="dropdown-congress">
            <NavDropdown.Item href="/senateMembers">Senate</NavDropdown.Item>
            <NavDropdown.Item href="/houseMembers">House</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Attendance" id="dropdown-attendance">
            <NavDropdown.Item onSelect={() => setChamber("senate")} href="/attendance" >Senate</NavDropdown.Item>
            <NavDropdown.Item onSelect={() => setChamber("house")} href="/attendance">House</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Party Loyalty" id="dropdown-loyalty">
            <NavDropdown.Item href="/partyLoyalty">Senate</NavDropdown.Item>
            <NavDropdown.Item href="/partyLoyalty">House</NavDropdown.Item>
        </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
);

export default Navigation;