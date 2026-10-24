"use strict";
/*
Crie a classe Lampada
Dado private ligada: boolean = false
Métodos: ligar(), desligar() e estaLigada()
Depois tente escrever lampada.ligada = true fora da classe
Leia a mensagem de erro e explique ao colega

*/
Object.defineProperty(exports, "__esModule", { value: true });
class Lampada {
    ligada = false;
    ligar() {
        this.ligada = true;
    }
    desligar() {
        this.ligada = false;
    }
    estaligada() {
        if (this.ligada == true) {
            console.log('LIGADO');
        }
        if (this.ligada == false) {
            console.log('DESLIGADO');
        }
    }
}
const a = new Lampada();
a.estaligada(); //desligado
a.ligada = true; //private
a.ligar(); // ligado
a.estaligada();
//# sourceMappingURL=lampada.js.map