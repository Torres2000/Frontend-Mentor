document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);
document.getElementById("btn_cerrar_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.left = "0";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.left = "-70%";
    background_menu.style.display = "none";
}



//codigo para cambiar de imagenes

document.getElementById("imagen-product-1").addEventListener("click", cambiarImagen1);
document.getElementById("imagen-product-2").addEventListener("click", cambiarImagen2);
document.getElementById("imagen-product-3").addEventListener("click", cambiarImagen3);
document.getElementById("imagen-product-4").addEventListener("click", cambiarImagen4);

function cambiarImagen1(){
    document.getElementById("img-seleccionada1").style.display = "initial"
    document.getElementById("img-seleccionada2").style.display = "none"
    document.getElementById("img-seleccionada3").style.display = "none"
    document.getElementById("img-seleccionada4").style.display = "none"

    document.getElementById("imagen-product-1").classList.add("seleccionada")
    document.getElementById("imagen-product-2").classList.remove("seleccionada")
    document.getElementById("imagen-product-3").classList.remove("seleccionada")
    document.getElementById("imagen-product-4").classList.remove("seleccionada")

    document.getElementById("img-seleccionada1").classList.add("animate__fadeIn")
    document.getElementById("img-seleccionada2").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada3").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada4").classList.remove("animate__fadeIn")
  }
function cambiarImagen2(){
    document.getElementById("img-seleccionada1").style.display = "none"
    document.getElementById("img-seleccionada2").style.display = "initial"
    document.getElementById("img-seleccionada3").style.display = "none"
    document.getElementById("img-seleccionada4").style.display = "none"

    document.getElementById("imagen-product-1").classList.remove("seleccionada")
    document.getElementById("imagen-product-2").classList.add("seleccionada")
    document.getElementById("imagen-product-3").classList.remove("seleccionada")
    document.getElementById("imagen-product-4").classList.remove("seleccionada")

    document.getElementById("img-seleccionada1").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada2").classList.add("animate__fadeIn")
    document.getElementById("img-seleccionada3").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada4").classList.remove("animate__fadeIn")
    
    img_seleccionada.classList.add("animate__fadeIn")
}
function cambiarImagen3(){
    document.getElementById("img-seleccionada1").style.display = "none"
    document.getElementById("img-seleccionada2").style.display = "none"
    document.getElementById("img-seleccionada3").style.display = "initial"
    document.getElementById("img-seleccionada4").style.display = "none"

    document.getElementById("imagen-product-1").classList.remove("seleccionada")
    document.getElementById("imagen-product-2").classList.remove("seleccionada")
    document.getElementById("imagen-product-3").classList.add("seleccionada")
    document.getElementById("imagen-product-4").classList.remove("seleccionada")

    document.getElementById("img-seleccionada1").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada2").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada3").classList.add("animate__fadeIn")
    document.getElementById("img-seleccionada4").classList.remove("animate__fadeIn")
}
function cambiarImagen4(){
    document.getElementById("img-seleccionada1").style.display = "none"
    document.getElementById("img-seleccionada2").style.display = "none"
    document.getElementById("img-seleccionada3").style.display = "none"
    document.getElementById("img-seleccionada4").style.display = "initial"

    document.getElementById("imagen-product-1").classList.remove("seleccionada")
    document.getElementById("imagen-product-2").classList.remove("seleccionada")
    document.getElementById("imagen-product-3").classList.remove("seleccionada")
    document.getElementById("imagen-product-4").classList.add("seleccionada")

    document.getElementById("img-seleccionada1").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada2").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada3").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada4").classList.add("animate__fadeIn")
}

//ocultar / mostrar cart
document.getElementById("icon-cart").addEventListener("click", mostrarcart);

function mostrarcart() {
    var x = document.getElementById("cart");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//ocultar / mostrar cart en grande
//document.getElementById("cerrar-cart").addEventListener("click", cerrarcartGrande);
document.getElementById("img-seleccionada").addEventListener("click", mostrarcartGrande);
document.getElementById("cerrar1").addEventListener("click", cerrarcartGrande)
vista_grande = document.getElementById("vista-grande");
imagene_grande = document.getElementById("imagenes1");
function cerrarcartGrande() {
    vista_grande.style.display = "none"
    
    imagene_grande.classList.remove("animate__backInUp")

   
}
function mostrarcartGrande() {
    vista_grande.style.display ="grid"
    imagene_grande.classList.add("animate__backInUp")
   
}


//codigo para cambiar de imagenes en grande

document.getElementById("imagen-product-11").addEventListener("click", cambiarImagen11);
document.getElementById("imagen-product-21").addEventListener("click", cambiarImagen21);
document.getElementById("imagen-product-31").addEventListener("click", cambiarImagen31);
document.getElementById("imagen-product-41").addEventListener("click", cambiarImagen41);

//cambiar con botones de atras y siguiente
document.getElementById("atras1").addEventListener("click", cambiarImagen41);
document.getElementById("siguiente1").addEventListener("click", cambiarImagen21);
document.getElementById("atras2").addEventListener("click", cambiarImagen11);
document.getElementById("siguiente2").addEventListener("click", cambiarImagen31);
document.getElementById("atras3").addEventListener("click", cambiarImagen21);
document.getElementById("siguiente3").addEventListener("click", cambiarImagen41);
document.getElementById("atras4").addEventListener("click", cambiarImagen31);
document.getElementById("siguiente4").addEventListener("click", cambiarImagen11);

function cambiarImagen11(){
    document.getElementById("img-seleccionada11").style.display = "block"
    document.getElementById("img-seleccionada22").style.display = "none"
    document.getElementById("img-seleccionada33").style.display = "none"
    document.getElementById("img-seleccionada44").style.display = "none"

    document.getElementById("imagen-product-11").classList.add("seleccionada")
    document.getElementById("imagen-product-21").classList.remove("seleccionada")
    document.getElementById("imagen-product-31").classList.remove("seleccionada")
    document.getElementById("imagen-product-41").classList.remove("seleccionada")

    document.getElementById("img-seleccionada11").classList.add("animate__fadeIn")
    document.getElementById("img-seleccionada22").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada33").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada44").classList.remove("animate__fadeIn")
  }
function cambiarImagen21(){
    document.getElementById("img-seleccionada11").style.display = "none"
    document.getElementById("img-seleccionada22").style.display = "block"
    document.getElementById("img-seleccionada33").style.display = "none"
    document.getElementById("img-seleccionada44").style.display = "none"

    document.getElementById("imagen-product-11").classList.remove("seleccionada")
    document.getElementById("imagen-product-21").classList.add("seleccionada")
    document.getElementById("imagen-product-31").classList.remove("seleccionada")
    document.getElementById("imagen-product-41").classList.remove("seleccionada")

    document.getElementById("img-seleccionada11").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada22").classList.add("animate__fadeIn")
    document.getElementById("img-seleccionada33").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada44").classList.remove("animate__fadeIn")
}
function cambiarImagen31(){
    document.getElementById("img-seleccionada11").style.display = "none"
    document.getElementById("img-seleccionada22").style.display = "none"
    document.getElementById("img-seleccionada33").style.display = "block"
    document.getElementById("img-seleccionada44").style.display = "none"

    document.getElementById("imagen-product-11").classList.remove("seleccionada")
    document.getElementById("imagen-product-21").classList.remove("seleccionada")
    document.getElementById("imagen-product-31").classList.add("seleccionada")
    document.getElementById("imagen-product-41").classList.remove("seleccionada")

    document.getElementById("img-seleccionada11").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada22").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada33").classList.add("animate__fadeIn")
    document.getElementById("img-seleccionada44").classList.remove("animate__fadeIn")
}
function cambiarImagen41(){
    document.getElementById("img-seleccionada11").style.display = "none"
    document.getElementById("img-seleccionada22").style.display = "none"
    document.getElementById("img-seleccionada33").style.display = "none"
    document.getElementById("img-seleccionada44").style.display = "block"

    document.getElementById("imagen-product-11").classList.remove("seleccionada")
    document.getElementById("imagen-product-21").classList.remove("seleccionada")
    document.getElementById("imagen-product-31").classList.remove("seleccionada")
    document.getElementById("imagen-product-41").classList.add("seleccionada")

    document.getElementById("img-seleccionada11").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada22").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada33").classList.remove("animate__fadeIn")
    document.getElementById("img-seleccionada44").classList.add("animate__fadeIn")
}


//aumentar y disminuir total cart
document.getElementById("menos").addEventListener("click", reducirtotal);
document.getElementById("mas").addEventListener("click", aumentartotal);
var inicio = 0;
var total_car = 0;
function reducirtotal() {

    if (total_car >0) {
        total_car = document.getElementById('cantidad').value = --inicio;
    } 
}
function aumentartotal() {
    total_car = document.getElementById('cantidad').value = ++inicio;
}

//poner el total en el carrito
document.getElementById("add-cart").addEventListener("click", addcart);

function addcart(){
    if (total_car >0) {
        document.getElementById("content").style.display = "block"
        document.getElementById("vacio").style.display = "none"
        total_valor = total_car * 125
        document.getElementById("total-cart").style.display ="flex"
        var eje= document.getElementById("total-cart").value = total_car
        document.getElementById("total-producto").textContent=total_car;
        document.getElementById("total-precio").textContent= "$"+total_valor+".00"

    } else {
        alert("Agrege al carrito")
        document.getElementById("total-cart").style.display ="none"
        document.getElementById("content").style.display = "none"
        document.getElementById("vacio").style.display = "grid"
    }
}

