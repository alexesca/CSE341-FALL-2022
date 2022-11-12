const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Description',
    },
    swaggerUIPath: '/api-docs',
    schemes: ['http'],
    definitions: {
        Contacts: [{
            name: "Simon Doe",
            email: "sd@gmail.com",
            phoneNumber: "801-500-3266",
            favoriteColor: "Red",
            dateOfBirth: "09/12/2000"
        }],
        Contact: {
            name: "Simon Doe",
            email: "sd@gmail.com",
            phoneNumber: "801-500-3266",
            favoriteColor: "Red",
            dateOfBirth: "09/12/2000"
        }
    }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
