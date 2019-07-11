var JC = {
    nombre: "Juan Carlos",
    apellido: "Castillo Lopez",
    edad: 37,
    ingeniero:true,
    cocinero:false,
    cantante:false,
    dj:false,
    guitarrista:false,
    basquetero:true
}

var Naty = {
<<<<<<< HEAD
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
=======
    nombre:"Natalia",
    apellido: "Castillo Lopez",
    edad: 7,
>>>>>>> 45227eb946352b1499318d0adf0c64d7adda7160
}


function imprimefuncion(persona) {
<<<<<<< HEAD
    console.log(`{$persona.nombre} es: `)
=======
    console.log(persona.nombre + " es: ")
>>>>>>> 45227eb946352b1499318d0adf0c64d7adda7160
    if (persona.ingeniero) {
        console.log("ingeniero")
    } else {
        console.log("no es ingeniero")
    }

    if (persona.cocinero) {
        console.log("cocinero")
    }

    if (persona.cantante) {
        console.log("cantante")
    }

    if (persona.dj) {
        console.log("dj")
    }

    if (persona.basquetero) {
        console.log("juega basquetbol")
    }
}

imprimefuncion(JC)

<<<<<<< HEAD
const MAYORIA_DE_EDAD = 18;

function imprimirSiEsMayorDeEdad(persona) {
=======
const Mayoria_De_Edad = 18
function Mostarsimayordeedad(persona) {
>>>>>>> 45227eb946352b1499318d0adf0c64d7adda7160
    if (EsMayorDeEdad(persona)) {
        console.log(persona.nombre + " es mayor de edad")
    } else {
        console.log(persona.nombre + " no es mayor de edad")
    }
}
<<<<<<< HEAD

function EsMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}



imprimirSiEsMayorDeEdad(JC)
imprimirSiEsMayorDeEdad(Naty)




=======
var EsMayorDeEdad = function(persona) {
    return persona.edad>=Mayoria_De_Edad;
}
Mostarsimayordeedad(JC)
Mostarsimayordeedad(Naty)
>>>>>>> 45227eb946352b1499318d0adf0c64d7adda7160
