import "../css/semantic.css";
import "../css/dashboard.css";

let logout = document.getElementById("logout");
let contentLogout = document.getElementById("contentLogout");
let main = document.getElementById("main");
let dropZone = document.getElementById("drop_zone");

let displayLogout = e => {
  e.preventDefault();
  contentLogout.classList.toggle("visible");
  main.classList.toggle("overlay");
};

let handleDrop = evt => {
  evt.stopPropagation();
  evt.preventDefault();

  let files = evt.dataTransfer.files;
  console.log(files);
};

let handleDragOver = evt => {
  console.log("File(s) in drop zone");
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = "move";
};

/*
Eventos
*/
logout.addEventListener("click", displayLogout);
dropZone.addEventListener("dragover", handleDragOver);
dropZone.addEventListener("drop", handleDrop);
