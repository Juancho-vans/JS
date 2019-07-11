var JC = {
    nombre: "Juan Carlos",
    apellido: "Castillo Lopez",
    edad: 37,
    peso:85,
    ingeniero:true,
    dj:false,
    basquetero:true
}

var Naty = {
    nombre: "Natalia",
    apellido: "Castillo Lopez",
    edad: 7,
    bailarina:true
}

console.log(`Al inicio del año ${JC.nombre} pesa ${JC.peso} Kg`)

const aumentarPeso = persona => persona.peso += variacionDePeso
const restaPeso = persona => persona.peso -= variacionDePeso

var variacionDePeso = .3
var diasDelAño = 365

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const meta = JC.peso - 3
var dias = 0

while (JC.peso > meta) {
    //debugger
    if(comeMucho()) {
        aumentarPeso(JC)
    }
    if(realizaDeporte()) {
        restaPeso(JC)
    }
    dias += 1
}

/* for (var int_i=1; int_i<=diasDelAño; int_i++) {
    var int_random = Math.random()
    if (int_random < 0.25) {
        aumentarPeso(JC)
    } else if (int_random < 0.5) {
        restaPeso(JC)
    }
} */




console.log(`pasaron ${dias} dias hasta que ${JC.nombre} adelgazo 3 Kg`) //tofixed(1) forza a dejar solo 1 decimal