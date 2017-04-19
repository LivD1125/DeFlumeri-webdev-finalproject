// src/components/IndexPage.js
import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="home">
                <Jumbotron>
                    <h1>This is your home page!</h1>
                    <p>You have come to the right place! At Sunshine you can send and receive positive messages to your friends!</p>
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>

            </div>
        );
    }
}