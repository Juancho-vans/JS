var nombre = "Juan Carlos";
var edad = 37;
var nombreMayus;
//creando el objeto JCCL
var JCCL = {
    nombre:"Juan Carlos",
    apellidoP:"Castillo",
    apellidoM:"Lopez",
    edad:37
    //llave:valor
}
var SITC = {
    nombre:'Saul Ivan',
    apellidoP:"Torres",
    apellidoM:"Chavez",
    edad:37
    //llave:valor ó Key:value
}
function imprimirEdad(nom, ed) {
    console.log( `${nom} tiene ${ed} años`)
}
// la comilla invertida ` se usa para colocar 
// codigo dentro de ella
imprimirEdad("Juan Carlos",37)
imprimirEdad("Natalia",6)

/*
el codigo ascci para la comilla invertida es 
alt + 96
``
*/

nombreMayusculas(JCCL)
nombreMayusculas(SITC)
nombreMayusculas({nombre:"Natalia",
            apellidoP:"castillo",
            apellidoM:"lopez", 
            edad:6})

function nombreMayusculas ({nombre}) {
    console.log(nombre)
}