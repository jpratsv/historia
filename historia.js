let historia = [
    {   contesta_si:1,
        text:"¿FUNCIONA?",              //  0
        contesta_no:2,
    },
    {   contesta_si:9,
        text:"NO LO TOQUES",            //  1
        contesta_no:9,
    },
    {   contesta_si:3,
        text:"¿LO HAS TOCADO?",         //  2
        contesta_no:8,
    },
    {   contesta_si:4,
        text:"BURRO",                   //  3
        contesta_no:4,
    },
    {   contesta_si:5,
        text:"¿ LO SABE ALGUIEN ?",    //  4
        contesta_no:6,
    },
    {   contesta_si:7,
        text:"¡¡¡¡ LA HAS CAGADO !!!!",    //  5
        contesta_no:7,
    },
    {   contesta_si:9,
        text:"¡¡¡¡ ESCONDELO !!!!",    //  6
        contesta_no:9,
    },
    {   contesta_si:9,
        text:"¿ PUEDES CULPAR A OTRO ?",    //  7
        contesta_no:5,
    },
    {   contesta_si:5,
        text:"¿ NOS DARA PROBLEMAS ?",    //  8
        contesta_no:10,
    },
    {   contesta_si:11,
        text:"¡¡¡¡ SIN PROBLEMAS !!!!",    //  9
        contesta_no:11,
    },
    {   contesta_si:9,
        text:"LANZALO",                   //  10
        contesta_no:9,
    }
]

let pagina = 0;
let text = document.querySelector('.text');
text.textContent = historia[pagina].text;
visualiza_pagina(pagina);

function ferSi() {
    pagina = historia[pagina].contesta_si;
    if (pagina===11){
        let tot = document.querySelector('.todo');
        tot.style.visibility="hidden";
    }
    else{
        text.textContent = historia[pagina].text;
        visualiza_pagina(pagina);
    }
   
}
function ferNo() {
    pagina = historia[pagina].contesta_no;
    if (pagina===11){
        let tot = document.querySelector('.todo');
        tot.style.visibility="hidden";
        
    }
    else{
        text.textContent = historia[pagina].text;
        visualiza_pagina(pagina);
    }
}

function visualiza_pagina(pagina) {
    let pag = document.querySelector('#pag');
    pag.textContent = "Pagina: " + pagina;
}


function visualiza_jugador(jugador) {
    let jugad = document.querySelector('#jug');
    jugad.textContent = "Jugador:  " + jugador;
}

function inicio() {
    let tot = document.querySelector('.todo');
    tot.style.visibility="visible";

    pagina = 0;
    let text = document.querySelector('.text');
    text.textContent = historia[pagina].text;
    visualiza_pagina(pagina);
 
}


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function open_modal() {
    modal.style.display = "block";
}

function close_modal() {
    modal.style.display = "none";
}

function boton_jugador() {
    btn.onclick = open_modal();
}
function entra_jugador() {
    var jugador
    jugador = document.getElementById("jugador").value;
    visualiza_jugador(jugador);
    close_modal();
}

span.onclick = function() {
    modal.style.display = "none";
}
     

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}