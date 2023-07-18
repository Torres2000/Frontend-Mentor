document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("Home").addEventListener("click", ocultarMenu);
document.getElementById("About").addEventListener("click", ocultarMenu);
document.getElementById("Contact").addEventListener("click", ocultarMenu);
document.getElementById("Blog").addEventListener("click", ocultarMenu);
document.getElementById("Carrers").addEventListener("click", ocultarMenu);

document.getElementById("back_menu").addEventListener("click", ocultarMenu);
background_menu = document.getElementById("back_menu");



nav = document.getElementById("nav");

var contador = 0;
function mostrar_menu(){
    if(contador == 0){
        nav.style.top = "80px";
        document.getElementById("btn_menu").src = "./images/icon-close.svg";
        document.getElementById("btn_menu").classList.add("animacion");
        document.getElementById("btn_menu").classList.remove("animacion2");
        background_menu.style.display = "block";
        contador = 1;
    } else
    if(contador == 1){
        nav.style.top = "-500px";
        document.getElementById("btn_menu").src = "./images/icon-hamburger.svg";
        document.getElementById("btn_menu").classList.remove("animacion");
        document.getElementById("btn_menu").classList.add("animacion2");
        background_menu.style.display = "none";
        contador = 0;
    }
}

function ocultarMenu(){
    nav.style.top = "-500px";
    document.getElementById("btn_menu").src = "./images/icon-hamburger.svg";
    document.getElementById("btn_menu").classList.remove("animacion");
    document.getElementById("btn_menu").classList.add("animacion2");
    background_menu.style.display = "none";
}








