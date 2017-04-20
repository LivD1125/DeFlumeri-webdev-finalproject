import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Link from 'react-router';
import Auth from '../../utilities/modules/Auth';

import { LinkContainer } from 'react-router-bootstrap';

export default class HomeNavBar extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Sunshine On a Rainy Day</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/profile/4">
                        <NavItem eventKey={1} href="#">Profile</NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={2} title="Gifts" id="basic-nav-dropdown">
                            <LinkContainer to="/send"><MenuItem eventKey={2.2}>Send a Gift</MenuItem></LinkContainer>
                            <MenuItem divider/>
                            <MenuItem eventKey={2.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>

                    <Nav pullRight>
                        {Auth.isUserAuthenticated() ? (
                        <LinkContainer to="/logout">
                            <NavItem eventKey={3}>Logout</NavItem>
                        </LinkContainer>
                            ) :  (
                            <LinkContainer to="/login">
                                <NavItem eventKey={3}>Login</NavItem>
                            </LinkContainer>
                            )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}