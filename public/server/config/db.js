var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'dogpigvote',
    password : '23.26.138.32!',
    database : 'dogpigvote'
});

module.exports = db;