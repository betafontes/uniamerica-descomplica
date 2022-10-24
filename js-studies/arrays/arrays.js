// Praticando Arrays

var valores = [8, 1, 7, 2, 9];

console.log(valores[3]);

// método de um array -> reverse
console.log("Array invertido: " + valores.reverse());


for (var pos = 0; pos < valores.length; pos++) {
    console.log("Posicao: " + pos + " Valor: " + valores[pos]);
}



// inserindo elementos a um array
var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array("BMW", "Yamaha", "Honda");



// Criando a média de todos os numeros de um array
var soma = 0;
for (var pos = 0; pos < valores.length; pos++) {
    soma += valores[pos];
}

var média = soma/valores.length;

console.log(média);



// métodos de um array
var arr1 = [1, 2, 3, 4, 5, 6];

console.log(arr1.join('|'));

var retirado = arr1.shift();

console.log(retirado);
console.log(arr1);
console.log("Posição do numero 3: " + arr1.indexOf(3));


arr1.push(7); // adicionando um item no array
console.log(arr1);

arr1.pop(); // removendo um item no array
console.log(arr1);


// Avançando com Arrays
var arr2 = [1, 2, 3, 4, 5, 6, 7];

// splice -> altera o array, seja adicionando ou removendo elementos dele.
arr2.splice(2,2); 
console.log(arr2);

var nomes = ["Maria", "Joao", "Lucas", "Pedro"];
var novos = nomes.splice(1,2,"Luiz", "Ronaldo");
console.log(nomes);

var pais = ["Brasil", "Argentina", "Colombia"];

pais.unshift("Uruguai"); // cria mais um elemento no inicio
console.log(pais);



// Manipulando mais Arrays
var pessoa = ["Eduardo", "Joana", "Wallace", "Rosana"];
var gerente = ["Davi", "Manuela"];
var pessoas1 = pessoa.slice(1,3); // o slice ele não muda o original

console.log(pessoa);
console.log(pessoas1);

var empresa = pessoa.concat(gerente); // concat -> faz junção de duas partes e logo a seguir retorna uma nova

console.log(empresa);