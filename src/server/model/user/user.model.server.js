module.exports = function (model) {
    var q = require('q');
    var mongoose = require('mongoose');
    var userModel = require('./user.schema.server.js');
    userModel.findUserById = findUserById;
    userModel.deleteUser = deleteUser;
    var api = {
        createUser: createUser,
        findUserById: findUserById,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials,
        deleteUser: deleteUser,
        updateUser: updateUser,
        findUserByFacebookId: findUserByFacebookId

    };
    return api;


    function findUserById(userId) {
        var deferred = q.defer();
        userModel
            .findById(userId, function (err, user) {
                if(err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

    function findUserByFacebookId(facebookId) {
        return userModel.findOne({'facebook.id': facebookId});
    }

    function findUserByUsername(uname) {
        var deferred = q.defer();
        userModel.findOne({username: uname}, function (err, status) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }

    function findUserByCredentials(uname, pword) {
        var deferred = q.defer();
        userModel.findOne({username: uname, password: pword}, function (err, status) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }

    function updateUser(userId, user) {
        var deferred = q.defer();
        userModel
            .update(
                {_id: userId},
                {$set: {username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        dateCreated: Date.now()}},
                function (err, status) {
                    deferred.resolve(status);
                });
        return deferred.promise;
    }

    function deleteUser(userId) {
        var deferred = q.defer();
        userModel.remove({_id: userId}, function (err, status) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }


    function createUser(user) {
        console.log('createUser');
        console.log(user);
        var deferred = q.defer();
        userModel.create(user, function (err, doc) {
            if(err) {
                console.log(err);
                deferred.reject(err);
            } else {
                console.log(doc);
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }
};