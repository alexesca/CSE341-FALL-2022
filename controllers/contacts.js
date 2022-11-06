const Contact = require("./../db/contacts/index") //

exports.index = async (req, res) => {
    const contacts = await Contact.find()
    res.send(contacts)
};

exports.id = async (req, res, next) => {
    const contact = await Contact.findById(req.params._id);
    console.log(contact)
    if(contact) {
        res.send(contact);
    } else {
        next(new Error("Contact not found."))
    }
};
