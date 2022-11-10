const Contact = require("./../db/contacts/index") //

exports.index = async (req, res) => {
    const contacts = await Contact.find()
    res.send(contacts)
};

exports.id = async (req, res, next) => {
    const contact = await Contact.findById(req.params._id);
    if(contact) {
        res.send(contact);
    } else {
        next(new Error("Contact not found."))
    }
};

exports.create = async (req, res) => {
    const contact = await Contact.create(req.body);
    res.status(201).send(contact._id);
};

exports.update = async (req, res) => {
    const _id = req.params._id;
    const contact = await Contact.updateOne(_id, req.body);
    res.status(204).send(contact._id);
};
