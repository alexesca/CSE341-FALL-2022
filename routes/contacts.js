


const controller = require("../controllers/contacts.js");
const contactMiddlewares = require("./../middlewares/create-contact.middleware.js");
const express = require("express");
const router = express.Router();

// Home page route.
router
    /**
     * @swagger
     * /:
     *   get:
     *     summary: Retrieve a list of JSONPlaceholder users
     *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
     */
    .get("/", controller.index)
    /**
     * @swagger
     * /_id:
     *   get:
     *     summary: Retrieve a list of JSONPlaceholder users
     *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
     */
    .get("/:_id", controller.id)
    .post("/", contactMiddlewares.createContact, controller.create)
    .put("/:_id", contactMiddlewares.createContact, controller.update)
    .delete("/:_id", controller.delete);

module.exports = router;
