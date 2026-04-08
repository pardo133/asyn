import { saludo } from './saludo.js'; 
import { gritarPalabra } from './mayusculas.js';
import { promesa } from './pizza.js';
  import { traerPokemon } from './pokeapi.js';
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














const img = document.getElementById("poke-imagen");
const lista = ["pikachu", "ditto", "bulbasaur", "charmander", "squirtle", "eevee", "snorlax"];
let i = 0;

setInterval(async () => {
    console.log("2. Intervalo activado");
    const url = await traerPokemon(lista[i]);
    
    if (img) {
        img.src = url;
        
    } else {
        console.error("No encontré la etiqueta <img> con id='poke-imagen'");
    }

    i = (i + 1) % lista.length;
}, 3000);



const musica = document.getElementById("poke-musica");


window.addEventListener('click', () => {
    musica.play();
    console.log("Música activada por el usuario");
}, { once: true }); 
