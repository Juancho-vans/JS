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


function imprimefuncion(persona) {
    console.log(`{$persona.nombre} es: `)
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

const MAYORIA_DE_EDAD = 18;

function imprimirSiEsMayorDeEdad(persona) {
    if (EsMayorDeEdad(persona)) {
        console.log(persona.nombre + " es mayor de edad")
    } else {
        console.log(persona.nombre + " no es mayor de edad")
    }
}

function EsMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}



imprimirSiEsMayorDeEdad(JC)
imprimirSiEsMayorDeEdad(Naty)




