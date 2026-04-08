export async function traerPokemon(nombre) {
    
    console.log("1. Entrando a la función para buscar a:", nombre);
    
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    const datos = await respuesta.json();
    
    return datos.sprites.front_default;
}