// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';
import HomeNavBar from './Nav/HomeNavBar';
import HomeFooter from './Nav/HomeFooter';
import Grid from 'react-bootstrap/lib/Grid';
export default class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <HomeNavBar />
                <div className="hello"><Grid fluid>{this.props.children}</Grid></div>
                <HomeFooter/>
            </div>
        );
    }
}