var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    dateCreated: {type: Date, default: Date.now},
    facebook: {
        id:    String,
        token: String
    }
}, {collection: 'sunshine.mongo.user'});

module.exports = mongoose.model('SunshineMongoUsers', userSchema);