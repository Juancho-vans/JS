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
    nombre:"Natalia",
    apellido: "Castillo Lopez",
    edad: 7,
}


function imprimefuncion(persona) {
    console.log(persona.nombre + " es: ")
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

const Mayoria_De_Edad = 18
function Mostarsimayordeedad(persona) {
    if (EsMayorDeEdad(persona)) {
        console.log(persona.nombre + " es mayor de edad")
    } else {
        console.log(persona.nombre + " no es mayor de edad")
    }
}
function EsMayorDeEdad(persona) {
    return persona.edad>=Mayoria_De_Edad;
}
Mostarsimayordeedad(JC)
Mostarsimayordeedad(Naty)