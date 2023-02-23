const mysql = require("mysql");
const dbConfig = require("../config/config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.DB.HOST,
  user: dbConfig.DB.USER,
  password: dbConfig.DB.PASSWORD,
  port: dbConfig.DB.PORT,
  database: dbConfig.DB.DATABASE
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;