import React from 'react';
import axios from 'axios';

export function createUser(user) {
    console.log('post');
    console.log(user);
    axios.post('/api/register', user).then(function(res) {
        return user;
    }).catch(function(error) {
        console.log(error);
    });
}

export function isLoggedIn() {
    axios.get('/api/loggedin').then(function(response) {
        return response !== 0;
    }).catch(function(error) {
        console.log(error);
        return false
    });
}

export function login(user) {
    axios.post('/api/login', user).then(function(res) {
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

