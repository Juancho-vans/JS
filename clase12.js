var JC = {
    nombre: "Juan Carlos",
    apellido: "Castillo Lopez",
    edad: 37,
    peso:85,
    ingeniero:true,
    cocinero:false,
    cantante:false,
    dj:false,
    guitarrista:false,
    basquetero:true
}

var Naty = {
    nombre: "Natalia",
    apellido: "Castillo Lopez",
    edad: 7,
    ingeniero:false,
    cocinero:false,
    cantante:false,
    dj:false,
    guitarrista:false,
    basquetero:true,
    bailarina:true
}

console.log(`Al inicio del año ${JC.nombre} pesa ${JC.peso} Kg`)

/* //funcion comentada para usar arrow function
function aumentarPeso (persona) {
    return persona.peso += 200
} */

var variacionDePeso = .2
var diasDelAño = 365
const aumentarPeso = persona => persona.peso += variacionDePeso
const restaPeso = persona => persona.peso -= variacionDePeso

for (var int_i=1; int_i<=diasDelAño; int_i++) {
    var int_random = Math.random()
    if (int_random < 0.25) {
        aumentarPeso(JC)
    } else if (int_random < 0.5) {
        restaPeso(JC)
    }
}


console.log(`Al fin del año ${JC.nombre} pesa ${JC.peso.toFixed(1)} Kg`) //tofixed(1) forza a dejar solo 1 decimal