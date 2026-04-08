export function mayusculas (str){
   try{
       let grito = str.toUpperCase();
        return `¡Grito con éxito!: ${grito}`;
   } catch (error) {
       
       return "eso no es una palabra es un numero";
   }
}