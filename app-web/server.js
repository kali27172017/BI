let express = require("express");
let bodyParser = require("body-parser");
let session = require("express-session");
let app = express();
let user, clave;

app.set("view engine", "pug");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/filter", (req, res) => {
  res.render("dashboardFilter");
});

app.post("/", (req, res) => {
  user = req.body.usuario;
  clave = req.body.clave;
  if (validaLogin(user, clave)) {
    res.redirect("/dash");
  } else {
    res.redirect("/");
  }
});

app.get("/dash", (req, res) => {
  req.session.user = user;
  req.session.clave = clave;
  res.render("dashboard", { usuario: req.session.user });
});

function validaLogin(user, clave) {
  if (user == "rejore" && clave == "12345") {
    return true;
  } else {
    return false;
  }
}

app.listen(4000);
