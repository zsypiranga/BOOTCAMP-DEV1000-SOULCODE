"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    emitirSom() {
        return "Som genérico";
    }
}
class Cachorro extends Animal {
    emitirSom() {
        return "Au Au!";
    }
}
class Gato extends Animal {
    emitirSom() {
        return "Miau!";
    }
}
const mia = new Gato("Mia");
const bicho = new Animal("Bicho");
console.log(mia.emitirSom());
console.log(bicho.emitirSom());
//# sourceMappingURL=03-Exercicio.js.map