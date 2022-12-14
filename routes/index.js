const controller = require("../controllers/index.js");

const express = require("express");
const router = express.Router();

// Home page route.
router.use("/contacts", require("./contacts.js"));
router.get("/", controller.index);

module.exports = router;
