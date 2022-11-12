require('dotenv').config()

const express = require('express');
const routes = require("./routes/index.js");
require("./db/connection.js");
var bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
var cors = require('cors')

var corsOptions = {
    origin: 'https://css341-fall-2022.onrender.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express()
const port = process.env.PORT || 3000;
app.use(bodyParser.json())
app.use(cors(corsOptions))

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", routes);


function errorHandler (err, req, res, next) {
    res.status(500).send({ error: err })
}

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
