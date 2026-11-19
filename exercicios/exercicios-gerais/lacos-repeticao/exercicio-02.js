"use strict";
/*
Ex 2.2 — Sequência de Fibonacci
Utilize um laço while para gerar e imprimir os primeiros N termos da sequência de Fibonacci (ex: para N = 7 → 0,
1, 1, 2, 3, 5, 8). O valor de N deve ser fornecido pelo usuário.

*/
Object.defineProperty(exports, "__esModule", { value: true });
function fibonacci(n) {
    let primeiro = 0;
    let segundo = 1;
    let contador = 0;
    while (contador < n) {
        console.log(primeiro);
        let proximo = primeiro + segundo;
        primeiro = segundo;
        segundo = proximo;
        contador++;
    }
}
fibonacci(7);
//# sourceMappingURL=exercicio-02.js.map