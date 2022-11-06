const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ContactSchema = new Schema({
    name: ObjectId,
    email: String,
    phoneNumber: String,
    dateOfBirth: Date
});

const ContactModel = mongoose.model('Contact', ContactSchema);
module.exports = ContactModel;
