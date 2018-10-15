import "../css/semantic.css";
import "../css/dashboard.css";

let logout = document.getElementById("logout");
let contentLogout = document.getElementById("contentLogout");
let main = document.getElementById("main");
let InputFile = document.getElementById("files");
let listaFiles = document.getElementById("list");
let reader = new FileReader();

let displayLogout = e => {
  e.preventDefault();
  contentLogout.classList.toggle("visible");
  main.classList.toggle("overlay");
};

let handleSelectFile = evt => {
  let extension = detectedExtension(InputFile.files[0]);

  if (extension == "png") {
    extensionJpg(reader, InputFile.files[0]);
  }
};

let detectedExtension = file => {
  let nameFile = file.name;
  let ext = nameFile.substr(nameFile.indexOf(".") + 1, nameFile.length - 1);
  return ext;
};

let extensionJpg = (reader, f) => {
  let image = ` <img src=:src: title=:title: width="80px" height="70px"/>`;
  reader.onload = (function(file) {
    return function(e) {
      let span = document.createElement("span");
      span.classList.add("span");
      span.innerHTML = image
        .replace(":src:", e.target.result)
        .replace(":title:", file.name);
      listaFiles.insertBefore(span, null);
    };
  })(f);
  reader.readAsDataURL(f);
};

/*
Eventos
*/
logout.addEventListener("click", displayLogout);
InputFile.addEventListener("change", handleSelectFile);
