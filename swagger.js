const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Description',
    },
    host: "css341-fall-2022.onrender.com",
    swaggerUIPath: '/docs',
    schemes: ['https'],
    definitions: {
        Contacts: [{
            firstName: "Simon",
            lastName: "Perez",
            email: "sd@gmail.com",
            birthday: "09/12/2000",
            favoriteColor: "Red",
        }],
        Contact: {
            firstName: "Simon",
            lastName: "Perez",
            email: "sd@gmail.com",
            birthday: "09/12/2000",
            favoriteColor: "Red",
        }
    }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
