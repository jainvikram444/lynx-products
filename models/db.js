const mysql = require("mysql");
const config = require('config');

// Create a connection to the database
const connection = mysql.createConnection({
  host: config.get("DB.HOST"),
  user: config.get("DB.USER"),
  password: config.get("DB.PASSWORD"),
  port: config.get("DB.PORT"),
  database: config.get("DB.DATABASE")
});

// open the MySQL connection
connection.connect(error => {
  console.log(config.get("DB.PORT"));
  if (error) throw error; 
  console.log("Successfully connected to the database.");
});

module.exports = connection;