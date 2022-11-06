// Using Node.js `require()`
const mongoose = require('mongoose');
await mongoose.connect(process.env.DB);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ContactSchema = new Schema({
    name: ObjectId,
    email: String,
    phoneNumber: String,
    dateOfBirth: Date
});

const ContactModel = mongoose.model('Contact', ContactSchema);
