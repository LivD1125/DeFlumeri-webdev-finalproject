import React from 'react';
import axios from 'axios';

export function createUser(user) {
    console.log('post');
    console.log(user);
    axios.post('/api/register', user).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log('err');
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

