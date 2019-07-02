var JC = {
    nombre: "Juan Carlos",
    apellido: "castillolopez",
    edad: 37,
    ingeniero:false,
    cocinero:false,
    cantante:false,
    dj:false,
    guitarrista:false,
    basquetero:true
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

function esmayordeedad(persona) {
    if (persona.edad>18) {
        console.log(persona.nombre + " es mayor de edad")
    } else {
        console.log(persona.nombre + " no es mayor de edad")
    }
}

esmayordeedad(JC)




