const setupDatabase = require("./repository/db.js");

/**Models */
const setupUserModel = require("./models/user.js");

/**Queries */
const setupRepositoryUser = require("./repository/user.js");

module.exports = async function(config) {
  const mysqlConnect = setupDatabase(config);
  await mysqlConnect.connect();

  const User = setupRepositoryUser(config);

  return {
    User
  };
};
