const mysql = require("mysql");
let conection = null;

module.exports = function setupDatabase(config) {
  if (!conection) {
    conection = mysql.createConnection(config);
  }
  return conection;
};
