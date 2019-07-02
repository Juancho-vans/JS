var edad = 37;
var peso = 80;
var carnitas = 2;
var basquet = 1;
var cheve = 200.3;
var total;
var totalstr;
var total2;
var rebanadas;
var personas;
var rebXpers;

edad = edad + 1
edad += 1 
peso =peso +5
peso -= 2

console.log("Hola Juan, en Diciembre tendras " + edad + " años")
console.log("y con subidad y bajadas, ahora pesas " + peso + " kilos")

peso = peso + carnitas
peso =peso - basquet

console.log("despues de los tacos y el basquet, ahora pesas " + peso + " kilos")

console.log("el precio de la cheve es de: " + cheve + " pesos")

//cheve = cheve * 3 //si lo dejamos asi, el resultado es 600.900000000001
//cheve = cheve * 100 * 3 / 100 // se multiplica por 100 para cnvertirlo a entero
/*esta accion no es muy recomendada 
ya que solo funciona
para 1 decimal */

total = Math.round(cheve * 100 * 3) / 100
totalstr = total.toFixed(4) //le decimos que deje 4 decimales
total2 = parseFloat(totalstr)

console.log("comprando 3 cheves, gastaremos : ")
console.log("total : " + total + " pesos")
console.log("totalstr : " + totalstr + " pesos")
console.log("total2 : " + total2 + " pesos")

rebanadas= 8
personas = 2
console.log("tenemos " + rebanadas + " rebandas y " + personas + " personas")
rebXpers = rebanadas / personas;
console.log("le tocan " + rebXpers + " rebandas a cada persona")
