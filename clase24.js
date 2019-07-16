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


//Este es el prototipo 
//entre parentesis van los parametros que queremos recibir
function Persona(nombre, apellido,altura)  {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura ;
    this.estado = "vivo";
    
    //return.this implicitamente regresa el objeto que se esta creando
}

//dentro del prototipo d epersona exisira una funcion llamada saludas
Persona.prototype.saludar = function () {
    if (this.altura<1.70) {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    } else {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy alto`)
        }
}


Persona.prototype.soyAlto = function () {
    return This.altura > 1.8
}


//aqui creamos al objeto co nel prototipo de la persona
var JuanCarlos = new Persona ('Juan Carlos', 'Castillo',1.80)
var Natalia = new Persona ("Natalia", "Castillo",1.0)
var Veronica = new Persona ("Veronica", "Pavon",1.50)

JuanCarlos.saludar()
Natalia.saludar()
Veronica.saludar()

JuanCarlos.soyAlto()
Natalia.soyAlto()
Veronica.soyAlto()
