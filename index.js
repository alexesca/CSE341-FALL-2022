require('dotenv').config()

const express = require('express');
const routes = require("./routes/index.js");
require("./db/connection.js");
var bodyParser = require('body-parser')


const app = express()
const port = process.env.PORT || 3000;
app.use(bodyParser.json())

app.use("/", routes);


function errorHandler (err, req, res, next) {
    res.status(500)
    res.send({ error: err })
}

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
