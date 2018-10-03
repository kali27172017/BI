const db = require("../index.js");
const mysql = require("mysql");

async function run() {
  const config = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "aws",
    port: 3306
  });

  config.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  const { User } = await db(config).catch(handleError);

  /*const user = await User.findUser({
    user: "rejore",
    password: "jorge9"
  }).catch(handleError);*/

  console.log(User);
}

function handleError(err) {
  console.error(err.message);
  console.log(err.stack);
  process.exit(1);
}

run();
