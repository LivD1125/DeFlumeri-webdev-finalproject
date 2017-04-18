import React from 'react';
import axios from 'axios';

export default function createUser(user) {
    console.log('post');
    console.log(user);
    axios.post('/api/register', user).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log('err');
        console.log(error);
    })
}

