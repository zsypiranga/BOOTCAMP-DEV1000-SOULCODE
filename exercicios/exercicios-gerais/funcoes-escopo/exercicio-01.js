"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conta = 100;
const taxaServico = 0.10;
function calcularConta(conta) {
    const taxaServico = 0.15;
    const soma = conta + (conta * taxaServico);
    console.log("Taxa local:", taxaServico);
    console.log("Total com taxa local:", soma);
    return soma;
}
const somaGlobal = conta + (conta * taxaServico);
console.log("Taxa global:", taxaServico);
console.log("Total com taxa global:", somaGlobal);
calcularConta(conta);
console.log("Taxa global após a função:", taxaServico);
//# sourceMappingURL=exercicio-01.js.map