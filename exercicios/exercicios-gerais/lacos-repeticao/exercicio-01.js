"use strict";
/*
Ex 2.1 — Gerador de Tabuada Completa
Escreva um programa utilizando a estrutura for que receba um número inteiro N e exiba a tabuada desse
número de 1 a 10 no formato N x i = Resultado.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function tabuada(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} X ${i}: ${n * i}`);
    }
}
tabuada(5);
//# sourceMappingURL=exercicio-01.js.map