const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    username: String,
    profilePicture: String // Save the file path in the database
});

const User = mongoose.model('Profile', profileSchema);

module.exports = profileSchema;