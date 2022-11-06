'use strict';
<<<<<<< Updated upstream
const mysql = require('mysql2');
require('dotenv').config();
=======
require('dotenv').config();
const mysql = require('mysql2');
>>>>>>> Stashed changes

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

<<<<<<< Updated upstream
module.exports = pool;
=======
module.exports = pool;
>>>>>>> Stashed changes
