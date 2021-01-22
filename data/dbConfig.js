// Complete your db configuration using the `environment` variable.
const knex = require("knex");

const knexfile = require("../knexfile.js");
const environment = process.env.DB_ENV || "development";

// change to "production" and update knexfile.js to use postgres.
// const production = "development";

module.exports = knex(knexfile[environment]);


//Lexie's Code:

// const knex = require('knex');
// const config = require('../knexfile.js');
// const environment = process.env.DB_ENV || 'development';
// module.exports = knex(config[environment]);