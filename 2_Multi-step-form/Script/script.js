const primerBoton = document.getElementsByClassName('boton1');
const paso1 = document.getElementsByClassName('paso1');
const paso2 = document.getElementsByClassName('paso2');
const paso3 = document.getElementsByClassName('paso3');
const paso4 = document.getElementsByClassName('paso4');

function paso1siguiente(){
    document.getElementById('paso1').style.display = "none";
    document.getElementById('primer-paso').classList.remove("active");
    document.getElementById('paso2').style.display = "block";
    document.getElementById('segundo-paso').classList.add("active");  
    document.getElementById('boton1').style.display = "none";
    document.getElementById('boton2').style.display = "flex";

    
}
function paso2siguiente(){
    

    sumar();
    if(plan_Seleccionado ==  "Arcade" || plan_Seleccionado=="Advance"|| plan_Seleccionado=="Pro"){
        console.log("Funcion plan seleccionado:"+plan_Seleccionado);
        document.getElementById('paso1').style.display = "none";
        document.getElementById('primer-paso').classList.remove("active");
        document.getElementById('paso2').style.display = "none";
        document.getElementById('segundo-paso').classList.remove("active"); 
        document.getElementById('paso3').style.display = "block";
        document.getElementById('tercer-paso').classList.add("active"); 
        document.getElementById('boton2').style.display = "none";
        document.getElementById('boton3').style.display = "flex";

    }else{
        alert("Seleccionar un plan")
        console.log("No se ha selecionado el plan");
    }
}
function paso2atras(){
    document.getElementById('paso1').style.display = "block";
    document.getElementById('primer-paso').classList.add("active"); 
    document.getElementById('paso2').style.display = "none";
    document.getElementById('segundo-paso').classList.remove("active"); 

    document.getElementById('boton1').style.display = "flex";
    document.getElementById('boton2').style.display = "none";
}
function paso3siguiente(){
    document.getElementById('paso1').style.display = "none";
    document.getElementById('primer-paso').classList.remove("active");
    document.getElementById('paso2').style.display = "none";
    document.getElementById('segundo-paso').classList.remove("active"); 
    document.getElementById('paso3').style.display = "none";
    document.getElementById('tercer-paso').classList.remove("active"); 
    document.getElementById('paso4').style.display = "block";
    document.getElementById('cuarto-paso').classList.add("active"); 
    document.getElementById('boton3').style.display = "none";
    document.getElementById('boton4').style.display = "flex";
    sumar();
}
function paso3atras(){
    document.getElementById('paso1').style.display = "none";
    document.getElementById('primer-paso').classList.remove("active"); 
    document.getElementById('paso2').style.display = "block";
    document.getElementById('segundo-paso').classList.add("active"); 
    document.getElementById('paso3').style.display = "none";
    document.getElementById('tercer-paso').classList.remove("active"); 
    document.getElementById('paso4').style.display = "none";
    document.getElementById('cuarto-paso').classList.remove("active");
    

    document.getElementById('boton2').style.display = "flex";
    document.getElementById('boton3').style.display = "none";
    document.getElementById('boton4').style.display = "none";


}
function paso4atras(){
    document.getElementById('paso1').style.display = "none";
    document.getElementById('primer-paso').classList.remove("active"); 
    document.getElementById('paso2').style.display = "none";
    document.getElementById('segundo-paso').classList.remove("active"); 
    document.getElementById('paso3').style.display = "block";
    document.getElementById('tercer-paso').classList.add("active"); 
    document.getElementById('paso4').style.display = "none";
    document.getElementById('cuarto-paso').classList.remove("active"); 

    document.getElementById('boton3').style.display = "flex";
    document.getElementById('boton4').style.display = "none";
}
function btnConfirmar(){
    document.getElementById('paso1').style.display = "none";
    document.getElementById('primer-paso').classList.remove("active"); 
    document.getElementById('paso2').style.display = "none";
    document.getElementById('segundo-paso').classList.remove("active"); 
    document.getElementById('paso3').style.display = "none";
    document.getElementById('tercer-paso').classList.remove("active"); 
    document.getElementById('paso4').style.display = "none";
    document.getElementById('cuarto-paso').classList.add("active"); 
    document.getElementById('final').style.display = "grid";
    document.getElementById('boton4').style.display = "none";
}

//Definimos las variables de los planes y los complementos
var valor_plan_arcade = 9;
var valor_plan_advance = 12;
var valor_plan_pro = 15;
var total_plan = 0;

var valor_complemento_servicio = 1;
var valor_complemento_almacenamiento = 2;
var valor_complemento_perfil= 2;
var total_Complemento = 0;

var total_Final = 0;

//Varibale para saber si el plan esta seleccionado o no
var plan_Seleccionado ="";

//Definimos si el plan es mensual o anual
var modalidad = "Mensual";
//Seleccionamos el plan
var planArcadeSeleccionado;
var planAdvanceSeleccionado;
var planProSeleccionado;


var toggle = document.querySelector(".onoffswitch-checkbox");
var body = document.querySelector("body");
var mes = document.getElementById('mes-gratis1');
var mese = document.getElementById('mes-gratis2');
var meses = document.getElementById('mes-gratis3');

var valor_arcade = document.getElementById("valor-arcade");
var valor_advance = document.getElementById("valor-advance");
var valor_pro = document.getElementById("valor-pro");

var valor_servicio = document.getElementById("valor-servicio-linea");
var valor_almacenamiento = document.getElementById("valor-almacenamiento");
var valor_perfil = document.getElementById("valor-perfil-personalizable");




//boton para cambair si es mensual o anual el plan
toggle.addEventListener('change', function() {

    
     mes.style.display = this.checked ? "block": "none";
     mese.style.display = this.checked ? "block": "none";
     meses.style.display = this.checked ? "block": "none";

     //quitar o poner el display none a los complementos que estaban seleccionado

     document.getElementById("com-servicio").style.display = this.checked ?  "none":"none";
     document.getElementById("com-almacenamiento").style.display = this.checked ?  "none":"none";
     document.getElementById("com-perfil").style.display = this.checked ?  "none":"none";

     //cambio en el valor de los planes
     valor_arcade.innerHTML = this.checked ? "$90/Año": "$9/Mensual";
     valor_advance.innerHTML = this.checked ? "$120/Año": "$12/Mensual";
     valor_pro.innerHTML = this.checked ? "$150/Año": "$15/Mensual";


     // le asignamos el valor nuevo a la variable
     valor_plan_arcade = this.checked ? 90: 9;
     valor_plan_advance = this.checked ? 120: 12;
     valor_plan_pro = this.checked ? 150: 15;
     console.log(valor_plan_arcade);

     //Cambio en el valor de los complementos
     valor_servicio.innerHTML = this.checked ? "$10/Año": "+$1/Mes";
     valor_almacenamiento.innerHTML = this.checked ? "$20/Año": "+$2/Mes";
     valor_perfil.innerHTML = this.checked ? "$20/Año": "+$2/Mes";
   
     valor_complemento_servicio = this.checked ? 10: 1;
     valor_complemento_almacenamiento = this.checked ? 20: 2;
     valor_complemento_perfil= this.checked ? 20: 2;

     //Cambio en la modalidad del plan
     modalidad = this.checked ? "Anual":"Mensual";
    console.log("Modalidad: "+modalidad);

    total_Complemento = this.checked ? 0:0;
    total_plan = this.checked ? 0:0;

    //quitar plan seleccionado
    plan_Seleccionado = this.checked ? "":"";

     //Quitar seleccion del plan
     quitarSeleccion();
});


//Funcion para seleccionar el plan
var plan_Arcade = document.getElementById("arcade");
var plan_Advance = document.getElementById("advance");
var plan_Pro = document.getElementById("pro");

var precioArcade = document.getElementById('valor-arcade');
var valorArcade = precioArcade.innerHTML;
var precioAdvance = document.getElementById('valor-advance');
var valorAdvance = precioAdvance.innerHTML;
var precioPro = document.getElementById('valor-pro');
var valorPro = precioArcade.innerHTML;

var valorPlan = 0;

function planArcade(){
    console.log("Valor "+valor_plan_arcade);
    plan_Arcade.classList.add("planSeleccionado");
    plan_Advance.classList.remove("planSeleccionado");
    plan_Pro.classList.remove("planSeleccionado");
    
    document.getElementById("modalidad").innerHTML = "(" +modalidad+" )";
    document.getElementById("precio-final-plan").innerHTML = "$"+valor_plan_arcade+"/"+modalidad;
    document.getElementById("plan-seleccionado").innerHTML = "Arcade";

    document.getElementById("modalidad-total").innerHTML = modalidad;
    
    total_plan = 0;
    total_plan= total_plan + valor_plan_arcade;
   console.log("Total final: "+total_plan)

   //selecionamos el plan arcade
   plan_Seleccionado = "";
   plan_Seleccionado = "Arcade";
   console.log("plan seleccionado: "+plan_Seleccionado)
}

function planAdvance(){
    console.log("Valor "+valor_plan_advance);
    plan_Advance.classList.add("planSeleccionado");
    plan_Arcade.classList.remove("planSeleccionado");
    plan_Pro.classList.remove("planSeleccionado");

    document.getElementById("modalidad").innerHTML = "(" +modalidad+" )";
    document.getElementById("precio-final-plan").innerHTML = "$"+valor_plan_advance+"/"+modalidad;
    document.getElementById("plan-seleccionado").innerHTML = "Advance";

    document.getElementById("modalidad-total").innerHTML = modalidad;

    total_plan = 0;
    total_plan = total_plan + valor_plan_advance;
    document.getElementById("precio-total").innerHTML = "$"+total_plan+"/"+modalidad;
   console.log("Total final: "+total_plan)

   //selecionamos el plan advance
   plan_Seleccionado = "";
   plan_Seleccionado = "Advance";
   console.log("plan seleccionado: "+plan_Seleccionado)
}

function planPro(){
   // console.log("Valor "+valor_plan_pro);
    plan_Pro.classList.add("planSeleccionado");
    plan_Advance.classList.remove("planSeleccionado");
    plan_Arcade.classList.remove("planSeleccionado");

    document.getElementById("modalidad").innerHTML = "(" +modalidad+" )";
    document.getElementById("precio-final-plan").innerHTML = "$"+valor_plan_pro+"/"+modalidad;
    document.getElementById("plan-seleccionado").innerHTML = "Pro";

    document.getElementById("modalidad-total").innerHTML = modalidad;

    total_plan = 0;
    total_plan = total_plan + valor_plan_pro;
    document.getElementById("precio-total").innerHTML = "$"+total_plan+"/"+modalidad;
   console.log("Total final: "+total_plan)

   //selecionamos el plan pro
   plan_Seleccionado = "";
   plan_Seleccionado = "Pro";
   console.log("plan seleccionado: "+plan_Seleccionado)
}


//Funcion para seleccionar el complemento
var servicio = document.getElementById("servicio-linea");
var almacenamiento = document.getElementById("almacenamiento");
var perfil = document.getElementById("perfil-personalizado");

var checkbox_complemento = document.getElementById("casilla-complemento");
var checkbox_almacenamiento = document.getElementById("casilla-almacenamiento");
var checkbox_perfil = document.getElementById("casilla-perfil");


//cuando se selecciona un complemento
var activoServicioLinea = document.getElementById("servicio-linea");
var activoAlmacenamiento = document.getElementById("almacenamiento");
var activoPerfil = document.getElementById("perfil-personalizado");


checkbox_complemento.addEventListener('click', function() {
    if(checkbox_complemento.checked) {
        //Ejemplo de arriba
        activoServicioLinea.classList.add("activo-complemento");
        activoServicioLinea.classList.remove("noactivo-complemento");  





        //total = total + valor_complemento_servicio;
        document.getElementById("com-servicio").style.display = "grid";

        //Cambiar el valor a los complementos
        document.getElementById("precio-servicio-linea").innerHTML = "+$"+valor_complemento_servicio+modalidad;
        total_Complemento = total_Complemento + valor_complemento_servicio;

    }else{
        //Ejemplo de arriba
        activoServicioLinea.classList.remove("activo-complemento"); 
        activoServicioLinea.classList.add("noactivo-complemento"); 

        document.getElementById("com-servicio").style.display = "none";
        total_Complemento = total_Complemento - valor_complemento_servicio;
    }
  });
  
checkbox_almacenamiento.addEventListener('click', function() {
    if(checkbox_almacenamiento.checked) {


        //Ejemplo de arriba
        activoAlmacenamiento.classList.add("activo-complemento");
        activoAlmacenamiento.classList.remove("noactivo-complemento");  


        
        document.getElementById("com-almacenamiento").style.display = "grid";

        //Cambiar el valor a los complementos
        document.getElementById("precio-almacenamiento").innerHTML = "+$"+valor_complemento_almacenamiento+modalidad;
        total_Complemento = total_Complemento + valor_complemento_almacenamiento;
    } else {

        //Ejemplo de arriba
        activoAlmacenamiento.classList.remove("activo-complemento"); 
        activoAlmacenamiento.classList.add("noactivo-complemento"); 



        document.getElementById("com-almacenamiento").style.display = "none";

        total_Complemento = total_Complemento - valor_complemento_almacenamiento;
    }
  });
checkbox_perfil.addEventListener('click', function() {
    if(checkbox_perfil.checked) {
        //Ejemplo de arriba
        activoPerfil.classList.add("activo-complemento");
        activoPerfil.classList.remove("noactivo-complemento"); 
        document.getElementById("com-perfil").style.display = "grid";
        //Cambiar el valor a los complementos
        document.getElementById("precio-perfil").innerHTML = "+$"+valor_complemento_perfil+modalidad;

        total_Complemento = total_Complemento + valor_complemento_perfil;
    } else {
        //Ejemplo de arriba
        activoPerfil.classList.remove("activo-complemento"); 
        activoPerfil.classList.add("noactivo-complemento"); 


        document.getElementById("com-perfil").style.display = "none";

        total_Complemento = total_Complemento - valor_complemento_perfil;

    }
  });

function quitarSeleccion(){
    plan_Arcade.classList.remove("planSeleccionado");
    plan_Advance.classList.remove("planSeleccionado");
    plan_Pro.classList.remove("planSeleccionado");

    //Planes
    document.getElementById("modalidad").innerHTML = "(--)";
    document.getElementById("precio-final-plan").innerHTML = "$0/--";
    document.getElementById("plan-seleccionado").innerHTML = "--";

    // Complementos
    document.getElementById("casilla-complemento").checked = false;
    document.getElementById("casilla-almacenamiento").checked = false;
    document.getElementById("casilla-perfil").checked = false;


    //Quito la seleccion de los complementos
    activoServicioLinea.classList.add("noactivo-complemento");
    activoAlmacenamiento.classList.add("noactivo-complemento");
    activoPerfil.classList.add("noactivo-complemento"); 

    activoServicioLinea.classList.remove("activo-complemento");
    activoAlmacenamiento.classList.remove("activo-complemento");
    activoPerfil.classList.remove("activo-complemento"); 


    plan_Seleccionado = "";
    
}
function sumar(){
    console.log("Total Plan "+total_plan+" Total complemento "+total_Complemento);
    
    total_Final = total_plan + total_Complemento;
    document.getElementById("precio-total").innerHTML = "$"+total_Final+"/"+modalidad;

}


//Codigos para validar el formulario
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const boton = document.getElementsByClassName("formulario__btn");

const expresiones = {
//	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	//password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,10}$/ // 7 a 14 numeros.
}

const campos = {
	//usuario: false,
	nombre: false,
	//password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		/*case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;*/
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		/*case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;*/
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		//document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		//document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		//document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		//document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

function enviar(){

	//const terminos = document.getElementById('terminos');
	if(campos.nombre &&  campos.correo && campos.telefono ){
		
		paso1siguiente();
	} else {
		//document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    
		alert("Llena el formulario correctamente")
		
	}
};

//Funciones para seleccionar un plan y poder avanzar


