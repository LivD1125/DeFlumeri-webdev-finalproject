import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';

export default class HomeNavBar extends React.Component {
    render() {
        return (
            <Navbar fixedBottom>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Sunshine</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Text pullRight>
                        Olivia DeFlumeri 2017
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}