exports.createContact = (req, res, next) => {
    const body = req.body;
    const firstName = body.firstName;
    const lastName = body.lastName;
    const email = body.email;
    const birthday = body.birthday;
    const favoriteColor = body.favoriteColor;

    if(!firstName || !lastName || !email || !birthday || !favoriteColor) next("Invalid create contact body. All values are required.");
    else next()
}
