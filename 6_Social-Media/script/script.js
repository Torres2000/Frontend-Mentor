

var toggle = document.querySelector(".onoffswitch-checkbox");

let toggleActivo;

toggle.addEventListener('change', function() {
    

    var ejemplo = this.checked ? cambiarANegro() : cambiarABlanco();

    

})


//Ejemplo con funcion para quitar y poner clases

function cambiarANegro(){
    // Cambiamos el color a social media
    // Cambiamos el color a overview
    const cards = [...document.querySelectorAll(".social-media")];
    // console.log(cards)

    cards.forEach(card =>{
        card.classList.add("blanco")
        card.classList.remove("negro")
    })
    window.localStorage.setItem('card', 'blanco');
    window.localStorage.setItem('cards', 'negro');


    const cantidad = [...document.querySelectorAll(".cantidad")];
    // console.log(cantidad)

    cantidad.forEach(canti =>{
        canti.classList.add("colorNegro")
        canti.classList.remove("colorBlanco")
    })
    window.localStorage.setItem('removecantidad', 'colorBlanco');
    window.localStorage.setItem('addcantidad', 'colorNegro');

    const cards2 = [...document.querySelectorAll(".overview")];
    // console.log(cards2)

    cards2.forEach(card2 =>{
        card2.classList.add("blanco")
        card2.classList.remove("negro")
    })
    window.localStorage.setItem('removeOverview', 'negro');
    window.localStorage.setItem('addOverview', 'blanco');

    const total_overview = [...document.querySelectorAll(".total-overview")];
    // console.log(total_overview)

    total_overview.forEach(tOverview =>{
        tOverview.classList.add("colorNegro")
        tOverview.classList.remove("colorBlanco")
    })
    window.localStorage.setItem('addtotal_overview', 'colorNegro');
    window.localStorage.setItem('removetotal_overview', 'colorBlanco');


    const likes = [...document.querySelectorAll(".usuario")];
    // console.log(likes)

    likes.forEach(like =>{
        like.classList.add("colorNegrito")
        like.classList.remove("colorBlanquito")
    })
    
    // Cambiamos el color a la banda horizontal
    document.getElementById("bandahorizontal").classList.add("bandahorizontal-azul")
    document.getElementById("bandahorizontal").classList.remove("bandahorizontal-negro")

    //Cambiar el color a social media 
    document.getElementById("social-media").style.color = "var(--Very_Dark_Blue3)"
    window.localStorage.setItem('social-media', 'var(--Very_Dark_Blue3)')
    document.getElementById("dar-mode").style.color = "var(--Dark_Grayish_Blue)"
    window.localStorage.setItem('dar-mode', 'var(--Dark_Grayish_Blue)')

    //Cambiar el color a social media 
    document.getElementById("Overview").style.color = "var(--Very_Dark_Blue3)"
    window.localStorage.setItem('Overview', 'var(--Very_Dark_Blue3)')


    document.getElementById("total").style.borderBottomColor = "var(--Dark_Grayish_Blue)"

    //Guardamos el color el localstorage
    window.localStorage.setItem('background', 'bandahorizontal-azul');


        //Cambiamos el color del body
        document.body.style.background = "var(--White)";

        window.localStorage.setItem('body', 'var(--White)');



        window.localStorage.setItem('toggle', 'true');

}
function cambiarABlanco(){
    // Cambiamos el color a overview
    const cards = [...document.querySelectorAll(".social-media")];
    // console.log(cards)

    cards.forEach(card =>{
        card.classList.remove("blanco")
        card.classList.add("negro")
    })
    window.localStorage.setItem('cards', 'blanco');
    window.localStorage.setItem('card', 'negro');

    const cantidad = [...document.querySelectorAll(".cantidad")];
    // console.log(cantidad)

    cantidad.forEach(canti =>{
        canti.classList.remove("colorNegro")
        canti.classList.add("colorBlanco")
    })
    window.localStorage.setItem('addcantidad', 'colorBlanco');
    window.localStorage.setItem('removecantidad', 'colorNegro');

    const cards2 = [...document.querySelectorAll(".overview")];
    // console.log(cards2)

    cards2.forEach(card2 =>{
        card2.classList.remove("blanco")
        card2.classList.add("negro")
    })
    window.localStorage.setItem('removeOverview', 'blanco');
    window.localStorage.setItem('addOverview', 'negro');


    const total_overview = [...document.querySelectorAll(".total-overview")];
    // console.log(total_overview)

    total_overview.forEach(tOverview =>{
        tOverview.classList.remove("colorNegro")
        tOverview.classList.add("colorBlanco")
    })
    window.localStorage.setItem('addtotal_overview', 'colorBlanco');
    window.localStorage.setItem('removetotal_overview', 'colorNegro');


    const likes = [...document.querySelectorAll(".usuario")];
    // console.log(likes)

    likes.forEach(like =>{
        like.classList.remove("colorNegrito")
        like.classList.add("colorBlanquito")
    })

    //cambiamos el color del body
    document.body.style.background = "var(--Very_Dark_Blue)";
    window.localStorage.setItem('body', 'var(--Very_Dark_Blue)');
    // Cambiamos el color a social media
    var social_media = document.getElementById("social-media");
    social_media.style.color =this.checked ? "var(--Very_Dark_Blue3)" : "var(--White)";

    // Cambiamos el color a la banda horizontal
   document.getElementById("bandahorizontal").classList.remove("bandahorizontal-azul")
   document.getElementById("bandahorizontal").classList.add("bandahorizontal-negro")


    document.getElementById("social-media").style.color = "var(--White)"
    window.localStorage.setItem('social-media', 'var(--White)')
    document.getElementById("dar-mode").style.color = "var(--White)"
    window.localStorage.setItem('dar-mode', 'var(--White)')

    //Cambiar el color a social media 
    document.getElementById("Overview").style.color = "var(--White)"
    window.localStorage.setItem('Overview', 'var(--White)')
    document.getElementById("total").style.borderBottomColor = "var(--Desaturated_Blue)"


    //Guardamos el color el localstorage
    window.localStorage.setItem('background', 'bandahorizontal-negro');

    window.localStorage.setItem('toggle', 'false');

}
document.getElementById("bandahorizontal").classList.add(window.localStorage.getItem('background') );
document.body.style.backgroundColor = window.localStorage.getItem('body');
document.getElementById("dar-mode").style.color = window.localStorage.getItem('dar-mode');
document.getElementById("social-media").style.color = window.localStorage.getItem('social-media');
    

const cards = [...document.querySelectorAll(".social-media")];
 // console.log(cards)

cards.forEach(card =>{
        card.classList.add(window.localStorage.getItem('card') );
        card.classList.remove(window.localStorage.getItem('cards') );
})

const cantidad = [...document.querySelectorAll(".cantidad")];
// console.log(cantidad)

cantidad.forEach(canti =>{
    canti.classList.add(window.localStorage.getItem('addcantidad') );
    canti.classList.remove(window.localStorage.getItem('removecantidad') );
})

const cards2 = [...document.querySelectorAll(".overview")];
    // console.log(cards2)

    cards2.forEach(card2 =>{
        card2.classList.remove(window.localStorage.getItem('removeOverview') );
        card2.classList.add(window.localStorage.getItem('addOverview') );
    })


    const total_overview = [...document.querySelectorAll(".total-overview")];
    // console.log(total_overview)

    total_overview.forEach(tOverview =>{
        tOverview.classList.add(window.localStorage.getItem('addtotal_overview') );
        tOverview.classList.remove(window.localStorage.getItem('removetotal_overview') );
    })

    document.getElementById("Overview").style.color = window.localStorage.getItem('Overview');

    toogleRe = window.localStorage.getItem('toggle');
    if (toogleRe == 'true') {
        toggle.checked = true;
    }else{
        toggle.checked = false
    }