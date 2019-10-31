import React, { Component } from 'react';
import {Navbar, Nav, Col, NavDropdown} from 'react-bootstrap';

import UserAvatar from './UserAvatar';
class Navigation extends Component {
    render() {
        return (
         
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">GAME CARO</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                    
                        <UserAvatar/>
                        
                        {/* <Navbar.Text> */}
                            <NavDropdown title="DrMark Otto" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                        {/* </Navbar.Text> */}
                        
                        
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

export default Navigation;