const Contact = require("./../db/contacts/index") //

exports.index = async (req, res) => {
    // #swagger.tags = ['Contacts']
    // #swagger.summary = 'Find all contacts.'
    const contacts = await Contact.find()
    res.send(contacts)
};

exports.id = async (req, res, next) => {
    // #swagger.tags = ['Contacts']
    // #swagger.summary = 'Find contact by ID.'
    const contact = await Contact.findById(req.params._id);
    if(contact) {
        res.send(contact);
    } else {
        next("Contact not found.");
    }
};

exports.create = async (req, res) => {
    // #swagger.tags = ['Contacts']
    // #swagger.summary = 'Create contact and return ID. All fields are required.'
    const contact = await Contact.create(req.body);
    res.status(201).send(contact._id);
};

exports.update = async (req, res) => {
    // #swagger.tags = ['Contacts']
    // #swagger.summary = 'Update contact.'
    const _id = req.params._id;
    await Contact.findByIdAndUpdate(_id, req.body);
    res.sendStatus(204)
};

exports.delete = async (req, res) => {
    // #swagger.tags = ['Contacts']
    // #swagger.summary = 'Delete contact.'
    const _id = req.params._id;
    await Contact.findByIdAndDelete(_id);
    res.sendStatus(200)
};
