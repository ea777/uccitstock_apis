const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b886c5b96aff29',
    password: '436285f8',
    database: 'heroku_4d2f8f02423c131',
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;
