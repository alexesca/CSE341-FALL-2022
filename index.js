require('dotenv').config()

const express = require('express');
const routes = require("./routes/index.js");
require("./db/connection.js");
var bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
var cors = require('cors')


const app = express()
const port = process.env.PORT || 3000;
app.use(bodyParser.json())
app.use(cors())

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", routes);


function errorHandler (err, req, res, next) {
    res.status(500).send({ error: err })
}

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
