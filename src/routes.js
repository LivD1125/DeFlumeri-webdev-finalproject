import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import NotFoundPage from './components/NotFoundPage';
import Login from './components/Login';
import Register from './components/Register.jsx';
import Profile from './components/Profile';
import About from './components/About';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage}/>
        <Route path="login" component={Login}/>
        <Route path="register" component={Register}/>
        <Route path="profile/:id" component={Profile}/>
        <Route path="about" component={About}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;