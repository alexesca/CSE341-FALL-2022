const Contact = require("./../db/contacts/index") //

exports.index = async (req, res) => {
    const contacts = await Contact.find()
    res.send(contacts)
};
