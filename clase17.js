var int_contador = 0

const yaPusoLaMarrana = () => Math.random() < 0.25

do {
    int_contador++
} while (!yaPusoLaMarrana())

if (int_contador==1) {
    console.log(`Fui a ver si puso la marrana ${int_contador} vez`)
    } else { 
        console.log(`Fui a ver si puso la marrana ${int_contador} veces`)
    }

