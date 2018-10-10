import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    ReactAuth App
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem href = "#">Login</NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
