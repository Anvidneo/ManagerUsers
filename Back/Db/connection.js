require('../Settings/settings');
const mysql = require('mysql2');

// Connection
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB_NAME
});


// Check if connec
connection.connect(error =>{
    if (error){error};
    console.log('Database server connected');
});

module.exports = connection