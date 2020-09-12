
const connection = require('../config/connection.js');


const orm = {

    all: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          console.log(result);
          cb(result);
        });
      },

    create: function(){}

    }


    module.exports = orm;