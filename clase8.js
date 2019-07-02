var x = 4
var y = "4"

// == compara a bajo nivel
// ===  compara a alto nivel

if (x==y) {
    console.log("X y Y son iguales con ==");
}

var JC = {
    nombre: "Juan Carlos"
}

var otroJC = {
    ...JC
    nombre: "Juan Carlos"
}

if (JC===otroJC) {
    console.log("son iguales con");
    }else {
        console.log("son diferentes");
}

