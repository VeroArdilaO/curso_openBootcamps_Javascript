
let factorial = 10; // Número del que queremos calcular el factorial
let resultado = 1 //primera vuelta 10, segunda vuelta 90, tercera vuelta 720...

for (let i = factorial; i > 0; i--) {
   resultado = resultado * i;
}
console.log(resultado);


