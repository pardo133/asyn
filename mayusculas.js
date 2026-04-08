
export function gritarPalabra(dato) {
    try {
        
        return dato.toUpperCase();
    } catch (error) {
       
        return "¡Eso no es una palabra, es un número!";
    }
}