//creando el objeto JCCL
var JCCL = {
    nombre:"Juan Carlos",
    apellidoP:"Castillo",
    apellidoM:"Lopez",
    edad:37
    //llave:valor
}
//creando el objeto SITC
var SITC = {
    nombre:'Saul Ivan',
    apellidoP:"Torres",
    apellidoM:"Chavez",
    edad:38
    //llave:valor ó Key:value
}

/* el codigo ascci para la comilla invertida es 
alt + 96 `` */

function nombreMayusculas (persona) {
    //var nombre = persona.nombre
    var {nombre} = persona
    console.log(nombre)
}

nombreMayusculas(JCCL)
nombreMayusculas(SITC)
nombreMayusculas({nombre:"Natalia",
            apellidoP:"castillo",
            apellidoM:"lopez", 
            edad:6})

function Nombre_Edad (persona) {
    //var nombre = persona.nombre
    var {nombre} = persona
    var {edad} = persona
    console.log("la persona " + nombre + " tiene " + edad + " años")
}

Nombre_Edad(JCCL)
Nombre_Edad(SITC)