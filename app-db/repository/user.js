const userModel = require("../models/user.js");

module.exports = function setupUser(config) {
  async function findUser(userModel) {
    connection.query({
      sql: "SELECT * FROM `users` WHERE `user` = ? AND `password` = ?",
      values: [userModel.user, userModel.password]
    }),
      function(err, results, fileds) {
        return results;
        //console.log(results);
      };
  }
};
