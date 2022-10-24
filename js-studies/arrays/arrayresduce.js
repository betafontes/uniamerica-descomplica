// método reduce -> reduz um array de valores a um único valor
// Quando usar: quando se tem um array de valores e quer somar todos eles

// forma normal 
var total = 0;
var numeros = [1, 2, 3, 4, 5, 6,];

for (var i = 0; i < numeros.length; i++) {
    total += numeros[i];
}
console.log(total);



// cada elemento do array vai estar na variável numero. 
// O total será iniciado com 0
var numeros = [1, 2, 3, 4, 5, 6];
var total = numeros.reduce(function (total, numero){
    return total + numero;
}, 0);
console.log(total);