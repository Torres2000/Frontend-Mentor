document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu() {
  nav.style.top = "97px";
  background_menu.style.display = "block";
}

function ocultar_menu() {
  nav.style.top = "-100%";
  background_menu.style.display = "none";
}

//COdigo para hacer el recorte del link
//Al hacer click en el boton ejecutamos la funcion tomar url
document.getElementById("enviar-url").addEventListener("click", enviarUrl);
let label_error = document.getElementById("label-error");

//Tomamos el link de nuestro html
var input_Url = document.getElementById("input-url");
function enviarUrl() {
  // //console.log("la url es: " + input_Url.value);
  if (input_Url.value == "") {
    input_Url.classList.add("error");
    label_error.style.display = "block";

    swal("Error", "Please add a link", "warning");
  } else {
    input_Url.classList.remove("error");
    label_error.style.display = "none";

    const options = { method: "GET" };
    fetch("https://api.shrtco.de/v2/shorten?url=" + input_Url.value, options)
      .then((response) => response.json())
      .then((response) => crearDiv(response))
      .catch((err) => console.error(err));
  }
}

const mostrar = document.getElementById("mostrar");
function crearDiv(data) {
  const verificar = data.ok;
  ////console.log("🚀 ~ file: index.js:47 ~ crearDiv ~ verificar:", verificar);
  //console.log(verificar);
  if (verificar == true) {
    // Cambia 5 por el número de divs que deseas crear
    const nuevoDiv = document.createElement("div");
    const nuevospan = document.createElement("span");
    const nuevoHr = document.createElement("hr");
    const nuevoSpan2 = document.createElement("span");
    const button = document.createElement("button");

    nuevospan.textContent = data.result.original_link;

    nuevoHr.classList.add("hr");
    nuevoSpan2.textContent = data.result.full_short_link;
    nuevoSpan2.classList.add("copylink");
    button.textContent = "Copy";
    button.classList.add("copybutton");

    nuevoDiv.appendChild(nuevospan);
    nuevoDiv.appendChild(nuevoHr);
    nuevoDiv.appendChild(nuevoSpan2);
    nuevoDiv.appendChild(button);

    mostrar.appendChild(nuevoDiv);
    // Agrega el evento de copiar al botón dentro del fragmento
    const copyButton = nuevoDiv.querySelector(".copybutton");
    const linkElement = nuevoDiv.querySelector(".copylink");

    copyButton.addEventListener("click", function () {
      copyToClipboard(linkElement.textContent);
      //console.log("hiciste clic");
    });
    guardar();
  } else {
    var errors = data.error;
    //console.log(errors);

    input_Url.classList.add("error");
    swal("Error", errors, "error");
  }
}

//Codigos cuando de click en copy

function copyToClipboard(text) {
  //console.log("hiciste click");
  //console.log(text);
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

//Guardar contenido en el local storage
function guardar() {
  const divContent = document.getElementById("mostrar").innerHTML;
  localStorage.setItem("savedContent", divContent);
}

document.addEventListener("DOMContentLoaded", function () {
  const savedContent = localStorage.getItem("savedContent");
  const div = document.getElementById("mostrar");

  if (savedContent !== null) {
    div.innerHTML = savedContent;
  }
});
