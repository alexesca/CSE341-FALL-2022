exports.createContact = (req, res, next) => {
    const body = req.body;
    const name = body.name;
    const email = body.email;
    const phoneNumber = body.phoneNumber;
    const dateOfBirth = body.dateOfBirth;

    if(!name || !email || !phoneNumber || !dateOfBirth) next("Invalid create contact body. All values are required.");
    else next()
}
