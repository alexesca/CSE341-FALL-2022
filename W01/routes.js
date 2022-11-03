const controller = require("./controllers.js");

const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", controller.index);

module.exports = router;
