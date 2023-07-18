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

    nav.style.right = "-50%";
    background_menu.style.display = "none";
}

//Pagina destination

//Cambiar moon-mars-europa-titan

function mostrarMoon(){
    document.getElementById('mars').style.display = "none";
    document.getElementById('moon').style.display = "block";
    document.getElementById('europa').style.display = "none";
    document.getElementById('titan').style.display = "none";

    document.getElementById('opcion1').classList.add("active");
    document.getElementById('opcion2').classList.remove("active");
    document.getElementById('opcion3').classList.remove("active");
    document.getElementById('opcion4').classList.remove("active");

    document.getElementById("img-moon").style.display = "initial";
    document.getElementById("img-mars").style.display = "none";
    document.getElementById("img-europa").style.display = "none";
    document.getElementById("img-titan").style.display = "none";

}
function mostrarMars(){
    document.getElementById('mars').style.display = "block";
    document.getElementById('moon').style.display = "none";
    document.getElementById('europa').style.display = "none";
    document.getElementById('titan').style.display = "none";

    document.getElementById('opcion1').classList.remove("active");
    document.getElementById('opcion2').classList.add("active");
    document.getElementById('opcion3').classList.remove("active");
    document.getElementById('opcion4').classList.remove("active");

    document.getElementById("img-moon").style.display = "none";
    document.getElementById("img-mars").style.display = "initial";
    document.getElementById("img-europa").style.display = "none";
    document.getElementById("img-titan").style.display = "none";

}
function mostrarEuropa(){
    document.getElementById('mars').style.display = "none";
    document.getElementById('moon').style.display = "none";
    document.getElementById('europa').style.display = "block";
    document.getElementById('titan').style.display = "none";

    document.getElementById('opcion1').classList.remove("active");
    document.getElementById('opcion2').classList.remove("active");
    document.getElementById('opcion3').classList.add("active");
    document.getElementById('opcion4').classList.remove("active");

    document.getElementById("img-moon").style.display = "none";
    document.getElementById("img-mars").style.display = "none";
    document.getElementById("img-europa").style.display = "initial";
    document.getElementById("img-titan").style.display = "none";

}
function mostrarTitan(){
    document.getElementById('mars').style.display = "none";
    document.getElementById('moon').style.display = "none";
    document.getElementById('europa').style.display = "none";
    document.getElementById('titan').style.display = "block";

    document.getElementById('opcion1').classList.remove("active");
    document.getElementById('opcion2').classList.remove("active");
    document.getElementById('opcion3').classList.remove("active");
    document.getElementById('opcion4').classList.add("active");

    document.getElementById("img-moon").style.display = "none";
    document.getElementById("img-mars").style.display = "none";
    document.getElementById("img-europa").style.display = "none";
    document.getElementById("img-titan").style.display = "initial";

}


//Pagina Crew

//Cambiar engineer-pilot-commander-Mission

function mostrarEngineer(){
    document.getElementById('Engineer').style.display = "block";
    document.getElementById('Commander').style.display = "none";
    document.getElementById('Pilot').style.display = "none";
    document.getElementById('Mission').style.display = "none";

    document.getElementById('opcion1').classList.add("active-boton");
    document.getElementById('opcion2').classList.remove("active-boton");
    document.getElementById('opcion3').classList.remove("active-boton");
    document.getElementById('opcion4').classList.remove("active-boton");

    document.getElementById("img-Engineer").style.display = "initial";
    document.getElementById("img-Commander").style.display = "none";
    document.getElementById("img-Pilot").style.display = "none";
    document.getElementById("img-Mission").style.display = "none";

}
function mostrarCommander(){
    document.getElementById('Engineer').style.display = "none";
    document.getElementById('Commander').style.display = "block";
    document.getElementById('Pilot').style.display = "none";
    document.getElementById('Mission').style.display = "none";

    document.getElementById('opcion1').classList.remove("active-boton");
    document.getElementById('opcion2').classList.add("active-boton");
    document.getElementById('opcion3').classList.remove("active-boton");
    document.getElementById('opcion4').classList.remove("active-boton");

    document.getElementById("img-Engineer").style.display = "none";
    document.getElementById("img-Commander").style.display = "initial";
    document.getElementById("img-Pilot").style.display = "none";
    document.getElementById("img-Mission").style.display = "none";

}
function mostrarPilot(){
    document.getElementById('Engineer').style.display = "none";
    document.getElementById('Commander').style.display = "none";
    document.getElementById('Pilot').style.display = "block";
    document.getElementById('Mission').style.display = "none";

    document.getElementById('opcion1').classList.remove("active-boton");
    document.getElementById('opcion2').classList.remove("active-boton");
    document.getElementById('opcion3').classList.add("active-boton");
    document.getElementById('opcion4').classList.remove("active-boton");

    document.getElementById("img-Commander").style.display = "none";
    document.getElementById("img-Engineer").style.display = "none";
    document.getElementById("img-Pilot").style.display = "initial";
    document.getElementById("img-Mission").style.display = "none";

}
function mostrarMission(){
    document.getElementById('Engineer').style.display = "none";
    document.getElementById('Commander').style.display = "none";
    document.getElementById('Pilot').style.display = "none";
    document.getElementById('Mission').style.display = "block";

    document.getElementById('opcion1').classList.remove("active-boton");
    document.getElementById('opcion2').classList.remove("active-boton");
    document.getElementById('opcion3').classList.remove("active-boton");
    document.getElementById('opcion4').classList.add("active-boton");

    document.getElementById("img-Commander").style.display = "none";
    document.getElementById("img-Engineer").style.display = "none";
    document.getElementById("img-Pilot").style.display = "none";
    document.getElementById("img-Mission").style.display = "initial";

}

//Pagina Technology

//Cambiar Launch-Spaceport-Space

function mostrarLaunch(){
    document.getElementById('Launch').style.display = "block";
    document.getElementById('Space').style.display = "none";
    document.getElementById('Spaceport').style.display = "none";

    document.getElementById('opcion1').classList.add("active-boton");
    document.getElementById('opcion2').classList.remove("active-boton");
    document.getElementById('opcion3').classList.remove("active-boton");

    document.getElementById("img-Launch").style.display = "block";
    document.getElementById("img-Space").style.display = "none";
    document.getElementById("img-Spaceport").style.display = "none";

}
function mostrarSpace(){
    document.getElementById('Launch').style.display = "none";
    document.getElementById('Space').style.display = "block";
    document.getElementById('Spaceport').style.display = "none";

    document.getElementById('opcion1').classList.remove("active-boton");
    document.getElementById('opcion2').classList.add("active-boton");
    document.getElementById('opcion3').classList.remove("active-boton");

    document.getElementById("img-Launch").style.display = "none";
    document.getElementById("img-Space").style.display = "block";
    document.getElementById("img-Spaceport").style.display = "none";

}
function mostrarSpaceport(){
    document.getElementById('Launch').style.display = "none";
    document.getElementById('Space').style.display = "none";
    document.getElementById('Spaceport').style.display = "block";

    document.getElementById('opcion1').classList.remove("active-boton");
    document.getElementById('opcion2').classList.remove("active-boton");
    document.getElementById('opcion3').classList.add("active-boton");

    document.getElementById("img-Space").style.display = "none";
    document.getElementById("img-Launch").style.display = "none";
    document.getElementById("img-Spaceport").style.display = "block";

}


//Cuando se cambia la resolucion de la pantalla

if (this.screen.width < 900) {
    document.getElementById("img-Launch").src = "./assets/technology/image-launch-vehicle-landscape.jpg";
    document.getElementById("img-Space").src = "./assets/technology/image-space-capsule-landscape.jpg";
    document.getElementById("img-Spaceport").src = "./assets/technology/image-spaceport-landscape.jpg";
    console.log("Pantalla a menos de 900")
    
}
if (this.screen.width > 900) {
    document.getElementById("img-Launch").src = "./assets/technology/image-launch-vehicle-portrait.jpg";
    document.getElementById("img-Space").src = "./assets/technology/image-space-capsule-portrait.jpg";
    document.getElementById("img-Spaceport").src = "./assets/technology/image-spaceport-portrait.jpg";
    console.log("Pantalla a mas de 900")
}
//Evento para tecnologia
window.addEventListener("resize", function(){
    // tu código aquí
    if (this.screen.width < 900) {
        document.getElementById("img-Launch").src = "./assets/technology/image-launch-vehicle-landscape.jpg";
        document.getElementById("img-Space").src = "./assets/technology/image-space-capsule-landscape.jpg";
        document.getElementById("img-Spaceport").src = "./assets/technology/image-spaceport-landscape.jpg";
        console.log("Pantalla a menos de 900")
        
    }
    if (this.screen.width > 900) {
        document.getElementById("img-Launch").src = "./assets/technology/image-launch-vehicle-portrait.jpg";
        document.getElementById("img-Space").src = "./assets/technology/image-space-capsule-portrait.jpg";
        document.getElementById("img-Spaceport").src = "./assets/technology/image-spaceport-portrait.jpg";
        console.log("Pantalla a mas de 900")
    }
});

