require('dotenv').config()

const express = require('express');
const routes = require("./routes/index.js");
require("./db/connection.js");

const app = express()
const port = process.env.PORT || 3000;

app.use("/", routes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
