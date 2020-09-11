const mysql = require('mysql');

//console.log('connnected next');
const connection = mysql.createConnection({
    host: "d1kb8x1fu8rhcnej.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "f6y7rtxswqgtamx9",
    password:"fzrchvh9ew342l2a",
    database: "f2ejrfnvmessgh5z"
});
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;