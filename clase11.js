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

//comento la funcion y la convierto asignandola a una variabe
/* function EsMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
} */


//comento la funcion que se asigno a una variable y la convierto en arrow function
/* var EsMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
} */

/* //funcion convertida en arrow function 
const EsMayorDeEdad = persona => { //cuando solo hay un parametro se pueden omitir los parentesis
    return persona.edad >= MAYORIA_DE_EDAD
} */

//mandando sololos parametros a utilizar
///des-estructuramos el objeto usando los {} y ahi si necesitamos los parentesis
const EsMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD  


function imprimirSiEsMayorDeEdad(persona) {
    if (EsMayorDeEdad(persona)) {
        console.log(persona.nombre + " es mayor de edad")
    } else {
        console.log(persona.nombre + " no es mayor de edad")
    }
}

imprimirSiEsMayorDeEdad(JC)
imprimirSiEsMayorDeEdad(Naty)

function perimitirAcceso (Persona) {
    if (!EsMayorDeEdad(Persona)) {
        console.log("Acceso denegado")
    }
    else {
        console.log("Acceso concedido")
    }
}

perimitirAcceso(JC)
perimitirAcceso(Naty)




