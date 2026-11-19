"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    _nome;
    _preco;
    constructor(nome, preco) {
        this._nome = nome;
        this._preco = preco;
    }
    get preco() {
        return this._preco;
    }
    set preco(valor) {
        if (valor < 0) {
            throw new Error("Preço não pode ser menor que zero");
        }
        this._preco = valor;
    }
}
const computador = new Produto('Computador', 1500); //CRIAÇÃO DO OBJETO
computador.preco = 2000; //DANDO PREÇO NOVO
console.log(computador); //EXIBINDO TODOS OS DADOS DO OBJETO
//# sourceMappingURL=02-Exercicio.js.map