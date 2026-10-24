const valor = 10;

function mostrarValor(valor: number) {
    console.log("Valor dentro da função:", valor);
}

console.log("Valor fora da função:", valor);

mostrarValor(25);

console.log("Valor fora após a função:", valor);