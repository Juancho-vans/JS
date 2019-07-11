var str_signo = prompt ("¿cual es tu signo?")

console.log(str_signo)


switch(str_signo) {
    case "cancer":
        console.log("Durante esta jornada, permita que su fantasía se libere y se convierta en la fuente de su inspiración. De esta forma, podrá darle un nuevo orden a su vida.")
        break
    case "aries":
        console.log("Durante este día, lo más probable es que toda su fuerza esté dirigida en la búsqueda de la orientación para su vocación o estudios específicos.")
        break
    case "escorpio":
    case "escorpion":
        console.log("Si pretende incentivar la creatividad, deberá poner en práctica capacidades como la motivación y las características de su personalidad.")
        break
    default:
            console.log("no es un signo zodiacal")
}





