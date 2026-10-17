console.log('===================PARTE 1===================')
console.log(thor.nome);
console.log(thor.apresentar());


class Pet {
    constructor(nome, peso) {
        this.nome = nome;
        this.peso = peso;
    }
}

const thor = Pet("Thor", 12.5);
console.log(thor);