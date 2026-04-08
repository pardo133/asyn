export function promesa(pizza) {
// las promesas responden en resuelto o rechazado, la palabra reject y resolve no son reservadas pero por norma general se usan estas palabras en especifico cuandos se trabaja en equipo
    return new Promise(
        (resolve, reject) => {
            if (pizza == true) {
                resolve("pizza caliente")
            } else {
                reject("oh no , carbon")
            }



        })

}