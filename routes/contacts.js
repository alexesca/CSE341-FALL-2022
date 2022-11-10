const controller = require("../controllers/contacts.js");
const contactMiddlewares = require("./../middlewares/create-contact.middleware.js");
const express = require("express");
const router = express.Router();

// Home page route.
router
    .get("/", controller.index)
    .get("/:_id", controller.id)
    .post("/", contactMiddlewares.createContact, controller.create)
    .put("/:_id", contactMiddlewares.createContact, controller.update)
    .delete("/:_id", controller.delete);

module.exports = router;
