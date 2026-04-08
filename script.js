import { saludo } from './saludo.js'; 
import { gritarPalabra } from './mayusculas.js';
import { promesa } from './pizza.js';
console.log(saludo());









const boton = document.getElementById("btn-gritar");
const inputTexto = document.getElementById("text"); 
const parrafo = document.getElementById("parrafo");

boton.onclick = function() {
    const valor = inputTexto.value;

    let datoAProcesar;
    if (valor !== "" && !isNaN(valor)) {
        datoAProcesar = Number(valor); 
    } else {
        datoAProcesar = valor;
    }

    const resultado = gritarPalabra(datoAProcesar);
    
    console.log(resultado);
    parrafo.innerText = resultado;
};


promesa(true)
const parrafoo = document.getElementById("parrafo");


promesa(true) 
    .then((response) => {
        parrafoo.textContent = response; 
    })
    .catch((error) => {
        parrafoo.textContent = error;
        console.error(error);
    });


