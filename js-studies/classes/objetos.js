var pessoa = {
    nome: 'Cauan',
    sobrenome: 'Fernando'
};
console.log(pessoa['sobrenome']);



// criando uma função para um objeto
var pessoa1 = new Object();

pessoa1.nome = "Roberta";
pessoa1.sobrenome = "Fontes"
pessoa1.NomeSobrenome = function() {
    console.log("Nome é: " + this.nome);
    console.log("Sobrenome é: " + this.sobrenome);
}
pessoa1.NomeSobrenome();



// outra forma de criar um objeto com uma função
function criarPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

var p1 = criarPessoa("Lucas","Silva");
var p2 = criarPessoa("Arthur","Almeida");

console.log(p1);
console.log(p2);
