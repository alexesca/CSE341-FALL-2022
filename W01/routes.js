// wiki.js - Wiki route module.

const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
    res.send("Alexander Escamilla");
});

module.exports = router;
