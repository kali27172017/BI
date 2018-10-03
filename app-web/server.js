let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.set("view engine", "pug");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  let user = req.body.usuario;
  let clave = req.body.clave;
  if (validaLogin(user, clave)) {
    res.redirect("/dash");
  } else {
    res.redirect("/");
  }
});

app.get("/dash", (req, res) => {
  res.render("dashboard");
});

function validaLogin(user, clave) {
  if (user == "rejore" && clave == "12345") {
    return true;
  } else {
    return false;
  }
}

app.listen(4000);
