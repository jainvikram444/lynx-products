const mysql = require("mysql");
const config = require('../config/database.json');
const node_env = process.env.NODE_ENV

// Create a connection to the database
const connection = mysql.createConnection({  
  host: config[node_env]["host"],
  user: config[node_env]["user"],
  password: config[node_env]["password"],
  port: config[node_env]["port"],
  database: config[node_env]["database"]
});

// open the MySQL connection
connection.connect(error => {
  console.log(node_env, config[node_env]);
  if (error) throw error; 
  console.log("Successfully connected to the database.");
});

module.exports = connection;