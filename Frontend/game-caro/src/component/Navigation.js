import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {connect} from 'react-redux';
import UserAvatar from './UserAvatar';
class Navigation extends Component {
    render() {
        const {user} = this.props.userLogin;
        const username = user ? user.username : ''
        return (
         
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">GAME CARO</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                   
                    
                        <Nav className="nav-right">
                            <UserAvatar/>         
                            <NavDropdown title={username} id="basic-nav-dropdown" drop={'down'}>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

const mapStateToProps = (state) => ({
  userLogin: state.userLogin
})

export default connect(mapStateToProps)(Navigation);