var nombre = "Juan Carlos";
var edad = 37;
var nombreMayus;



function imprimirEdad(nom, ed) {
    console.log( `${nom} tiene ${ed} años`)
}
// la comilla invertida ` se usa para colocar 
// codigo dentro de ella

imprimirEdad()
imprimirEdad("Juan Carlos",37)
imprimirEdad("Natalia",6)

/*
el codigo ascci para la comilla invertida es alt + 96
``
*/

function nombreMayusculas (nombreMayus) {
    console.log(nombreMayus.toUpperCase())
}

nombreMayusculas("juan carlos")
nombreMayusculas("natalia")
nombreMayusculas("anacleta")