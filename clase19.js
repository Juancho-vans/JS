var JC = {
    nombre: "Juan Carlos",
    apellido: "Castillo Lopez",
    altura: 1.80
}

var Naty = {
    nombre: "Natalia",
    apellido: "Castillo Lopez",
    altura:1.05
}

var Vero = {
    nombre:"veronica",
    apellido:"Pavon Garcia",
    altura:1.50
}

var Ram = {
    nombre:"Ramiro",
    apellido:"Bautista Pavon",
    altura:1.40
}
var personas = [JC,Naty,Vero,Ram]

for (var int_i=0 ; int_i < personas.length; int_i++) {
    var persona = personas[int_i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}