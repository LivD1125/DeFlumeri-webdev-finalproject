import React from 'react'
import { Route, IndexRoute, Router, hashHistory } from 'react-router'
import Layout from "./components/Layout";
import IndexPage from './components/IndexPage';
import NotFoundPage from './components/NotFoundPage';
import Login from './components/Login';
import Register from './components/Register.jsx';
import Profile from './components/Profile/Profile';
import About from './components/About';
import HomePage from './components/HomePage';
import { isLoggedIn } from './utilities/Services'

function loggedIn() {
    return isLoggedIn()
}

function requireAuth(nextState, replace) {
    if (!loggedIn()) {
        replace({
            pathname: '/login'
        })
    }
}

const routes = (
    <Router history={hashHistory} >
    <Route component={Layout}>
        <Route path="/" component={IndexPage}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/profile/:id" onEnter={requireAuth} component={Profile}/>
        <Route path="/about" component={About}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
    </Router>
);

export default routes;