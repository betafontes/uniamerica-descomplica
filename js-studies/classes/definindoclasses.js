// o clases traz uma melhor organização para o código

// entendendo sobre as classes
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        console.log(this.firstName + " " + this.lastName);
    }
}
const user = new User("Caio", "de Lima Granero");
user.getFullName(); // "Caio de Lima Granero"



// getters e setters são usados para proteger dados, especialmente na criação de classes.
// getters -> acesso , setters -> modificação
// um método getteer retorna seu valor, enquanto um método setter o define ou atualiza

class Person {
    constructor(name) {
        this.name = name;
    }

    get name() {
        // código
    }

    set name(newName) {
        // código
    }
}