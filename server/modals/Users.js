const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    email: String
});

const UserModal = mongoose.model('Users', UserSchema);
module.exports = UserModal