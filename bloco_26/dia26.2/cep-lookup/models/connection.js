const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Umasenha1.',
    database: 'cep_lookup' });

module.exports = connection;