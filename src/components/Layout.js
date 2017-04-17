// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';
import HomeNavBar from './HomeNavBar';
import HomeFooter from './HomeFooter';
export default class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <header>
                    <HomeNavBar/>
                </header>
                <div className="app-content">{this.props.children}</div>
                <footer>
                    <HomeFooter
                    />
                </footer>
            </div>
        );
    }
}