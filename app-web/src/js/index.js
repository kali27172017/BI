import "../css/semantic.css";
import "../css/home.css";

import $ from "jquery";

let login = document.getElementById("formLogin");
let usuario = document.getElementById("usuario");
let clave = document.getElementById("clave");

/*let loginForm = e => {
  e.preventDefault();
  ajaxLogin(usuario.value, clave.value);
};*/

/*let ajaxLogin = (usuario, clave) => {
  $.ajax({
    method: "POST",
    url: "http://localhost:4000/login",
    data: { usuario: usuario, clave: clave }
  })
    .done(msg => {
      console.log(msg);
      redirectLocation(msg);
    })
    .fail(err => {
      console.log(err);
    });
};

let redirectLocation = bandera => {
  if (bandera) {
    location.href = "http://localhost:4000/dash";
  }
};*/

//login.addEventListener("submit", loginForm);
