const mysql = require('mysql');

require('dotenv').config(); // loads environment variables from .env file


// Connection Pool, to re-use database connection whenever needed
const pool = mysql.createPool({
  connectionLimit : 100,
  host            : process.env.DB_HOST,
  database        : process.env.DB_NAME,
  user            : process.env.DB_USER,
  password        : process.env.DB_PASS,
});

module.exports = {
  getPool: function () {
    if (pool) return pool; // if it is already there, grab it here
    pool = new pg.Pool(config);
    return pool;
  }
}