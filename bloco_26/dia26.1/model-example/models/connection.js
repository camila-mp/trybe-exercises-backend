// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Umasenha1.',
    database: 'model_example' });

module.exports = connection;