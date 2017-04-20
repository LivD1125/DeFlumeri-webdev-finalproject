import React from 'react'
import { Route, IndexRoute, Router, hashHistory } from 'react-router'
import Layout from "./components/Layout";
import IndexPage from './components/IndexPage';
import NotFoundPage from './components/NotFoundPage';
import Login from './components/Login';
import Register from './components/Register.js';
import Profile from './components/Profile/Profile';
import About from './components/About';
import HomePage from './components/HomePage';
import { isLoggedIn } from './utilities/Services'
import Auth from './utilities/modules/Auth';
// function loggedIn() {
//     var login = isLoggedIn();
//     console.log('loggedin');
//     isLoggedIn(function(results) {
//         return results;
//     });
// }
//
// function requireAuth(nextState, replace) {
//     console.log('requireAuth');
//     var login =
//     console.log(login);
//     if (!isLoggedIn(function(results) {
//             return results;
//         })) {
//         console.log('here');
//         replace({
//             pathname: '/login'
//         });
//     }
// }
//
// const routes = (
//     <Router history={hashHistory} >
//     <Route component={Layout}>
//         <Route path="/" component={IndexPage}/>
//         <Route path="/home" component={HomePage}/>
//         <Route path="/login" component={Login}/>
//         <Route path="/register" component={Register}/>
//         <Route path="/profile/:id" onEnter={requireAuth} component={Profile}/>
//         <Route path="/about" component={About}/>
//         <Route path="*" component={NotFoundPage}/>
//     </Route>
//     </Router>
// );


const routes = {
    // base component (wrapper for the whole application).
    component: Layout,
    childRoutes: [

        {
            path: '/',
            getComponent: (location, callback) => {
                if (Auth.isUserAuthenticated()) {
                    callback(null, HomePage);
                } else {
                    callback(null, IndexPage);
                }
            }
        },
        {
            path: '/profile/:id',
            getComponent: (location, callback) => {
                if (Auth.isUserAuthenticated()) {
                    callback(null, Profile);
                } else {
                    callback(null, Login);
                }
            }
        },
        {
            path: '/login',
            component: Login
        },

        {
            path: '/register',
            component: Register
        },

        {
            path: '/logout',
            onEnter: (nextState, replace) => {
                Auth.deauthenticateUser();

                // change the current URL to /
                replace('/');
            }
        }

    ]
};

export default routes;