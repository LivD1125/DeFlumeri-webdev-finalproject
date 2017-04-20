import React from 'react';
import axios from 'axios';
import Auth from '../utilities/modules/Auth';

export function createUser(user) {
    console.log('post');
    console.log(user);
    axios.post('/api/register', user).then(function(res) {
        Auth.authenticateUser(res.data.token);
        return user;
    }).catch(function(error) {
        console.log(error);
    });
}

export function isLoggedIn(callback) {
    console.log('isloggedin');
}

export function login(user) {
    console.log(user);
    axios.post('/api/login', user).then(function(res) {
        Auth.authenticateUser(res.data.token);
        return res;
    }).catch(function(error) {
        console.log(error);
    })
}

export function logout(user) {
    axios.post('/api/logout', user).then(function(res) {
        return res;
    }).catch(function(error) {
        console.log(error);
    })
}

