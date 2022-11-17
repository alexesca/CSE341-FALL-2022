const {get} = require('lodash');
const {isEmail} = require('validator');

exports.validateContact = (req, res, next) => {
    debugger
    const contact = get(req, 'body');
    if(isEmail(contact.email)) {
        next();
    } else {
        next("Invalid email");
    }
}
