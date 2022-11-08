##Mongodb Driver
#
### Intro
Managing business logic and database data is very complex. 
If we want to write the implementation for the connection between the DB and our server and the CRUD operations to manage our records or documents in our database, we would have to write a lot of code and deal with security, performance, latency, etc. 

### Enter ODBC

This is why we use drivers known as ODBC drivers. Open Database Connectivity is an interface or standard developed by Microsoft to allow applications to CRUD the data stored in database management systems(DMS) such as MicrosoftSQL Server, MongoDB, MySQL, PostgresQL,  etc. 

### MongooseJS

There are at least two main `ODBC` drivers used to access MongoDB data. MongooseJS and the MongoDB Driver Client. I will focus on the former one.
Mongoose is a powerful  ODBC driver that includes schema validation, casting, business logic, query building, hooks, and more. For example, MongoDB(The database) is schemaless. Mongoose allows us to set rules and apply validation before we CRUD the database. It maps our schema written in JS to our MongoDB collection. Mongoose takes care of creating the collection with the name of our schema, CRUD and validates our data. Another powerful tool about mongoose is pluggable. You can create your own plugins to extend the functionality of your code.


#### Schema Example

In order to create a schema you need to import the driver `mongoose` and create an instance of `new Schema()`.
`new Schema()` accepts a JS object with the properties of the collection.

```js
import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
    votes: Number,
    favs:  Number
}
});
```


#### Plugins

Here is an example of how to add a plugin to a Mongoose Schema. This plugin adds a `loadedAt` field to all the models or collections in your database.


```js
module.exports = function loadedAtPlugin(schema, options) {
  schema.virtual('loadedAt').
    get(function() { return this._loadedAt; }).
    set(function(v) { this._loadedAt = v; });

  schema.post(['find', 'findOne'], function(docs) {
    if (!Array.isArray(docs)) {
      docs = [docs];
    }
    const now = new Date();
    for (const doc of docs) {
      doc.loadedAt = now;
    }
  });
};

// game-schema.js
const loadedAtPlugin = require('./loadedAt');
const blogSchema = new Schema({ ... });
blogSchema.plugin(loadedAtPlugin);
```


### Sources

1. https://www.progress.com/faqs/datadirect-odbc-faqs/what-is-an-odbc-driver#:~:text=An%20ODBC%20driver%20uses%20the,standard%20for%20accessing%20the%20data.
2. https://mongoosejs.com/docs/subdocs.html
