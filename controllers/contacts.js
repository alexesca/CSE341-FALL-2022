const Contact = require("./../db/contacts/index") //

exports.index = async (req, res) => {
    // #swagger.tags = ['Contacts']
    // #swagger.summary = 'Find all contacts.'
    // #swagger.description = 'This endpoint returns a list with all the contacts in the database.'
    const contacts = await Contact.find()
    res.send(contacts)
};

exports.id = async (req, res, next) => {
    // #swagger.tags = ['Contacts']
    // #swagger.summary = 'Find contact by ID.'
    // #swagger.description = 'This endpoint returns a contact found with the provided ID'
    /* #swagger.parameters['_id'] = {
        description: "Id of the desired contact.",
        required: true,
        type: "string",
        schema: "636c889a2a02ef8e6e9f50e6"
} */

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
    // #swagger.description = 'This endpoint creates a contact and returns the newly created contact ID.'
    /*  #swagger.parameters['Contacts'] = {
                    in: 'body',
                    description: 'Model of the new contact.',
                    schema: { $ref: '#/definitions/Contacts' }
            } */
    const contact = await Contact.create(req.body);
    res.status(201).send(contact._id);
};

exports.update = async (req, res) => {
    // #swagger.tags = ['Contacts']
    // #swagger.summary = 'Update contact.'
    // #swagger.description = 'This endpoint updates a contact. All fields are required for a successful update.'
    /*  #swagger.parameters['Contacts'] = {
                in: 'body',
                description: 'Model of the new contact.',
                schema: { $ref: '#/definitions/Contacts' }
        } */
    const _id = req.params._id;
    await Contact.findByIdAndUpdate(_id, req.body);
    res.sendStatus(204)
};

exports.delete = async (req, res) => {
    // #swagger.tags = ['Contacts']
    // #swagger.summary = 'Delete contact.'
    // #swagger.description = 'This endpoint deletes a contact if a valid ID is passed.'
    const _id = req.params._id;
    await Contact.findByIdAndDelete(_id);
    res.sendStatus(200)
};
