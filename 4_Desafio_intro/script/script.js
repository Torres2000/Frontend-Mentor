

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);
document.getElementById("btn_cerrar_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-240px";
    background_menu.style.display = "none";
}


// Cambiar el icono de la lista desplegable

let características  = document.getElementById("características");


características.onmouseenter = function (e) {
    document.getElementById("icon-arrow-down1").src = "./images/icon-arrow-up.svg"
}
características.onmouseleave = function (e) {
    document.getElementById("icon-arrow-down1").src = "./images/icon-arrow-down.svg"
}

let compania  = document.getElementById("compañia");


compania.onmouseenter = function (e) {
    document.getElementById("icon-arrow-down2").src = "./images/icon-arrow-up.svg"
}
compania.onmouseleave = function (e) {
    document.getElementById("icon-arrow-down2").src = "./images/icon-arrow-down.svg"
}



