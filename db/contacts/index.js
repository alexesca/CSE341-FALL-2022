const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String,
    email: String,
    phoneNumber: String,
    dateOfBirth: String
    favoriteColor: String
});

const ContactModel = mongoose.model('Contact', ContactSchema);
module.exports = ContactModel;
