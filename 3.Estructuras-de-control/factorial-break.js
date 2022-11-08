let factorial = 10;
let resultado = 1;

while (true) {
    if(factorial > 0) {
    resultado = resultado * factorial;
    factorial--;
    }else {
        break;
    }
}

console.log(resultado)