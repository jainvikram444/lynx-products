const mysql = require("mysql");
const dbConfig = require("../config/config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.DB_HOST,
  user: dbConfig.DB_USER,
  password: dbConfig.DB_PASSWORD,
  port: dbConfig.DB_PORT,
  database: dbConfig.DB_DATABASE
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;