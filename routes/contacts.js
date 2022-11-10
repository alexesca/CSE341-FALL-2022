const controller = require("../controllers/contacts.js");

const express = require("express");
const router = express.Router();

// Home page route.
router
    .get("/", controller.index)
    .get("/:_id", controller.id)
    .post("/", controller.create)
    .put("/:_id", controller.update)
    .delete("/:_id", controller.delete);

module.exports = router;
