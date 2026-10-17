/*
const nome = "Alexandre";
console.log(nome);

let peso = 93;

const exibir = `O PACIENTE ${nome} PESA ${peso}kG`;
console.log(exibir);
let altura = 1.85;

const completo = exibir + ` MEDE ${altura}m`;
console.log(completo);

console.log(typeof nome);
console.log(typeof altura);
console.log(typeof peso);

const soma = 3 + 2;
console.log(soma)

const subtracao = 3 - 2;
console.log(subtracao);

const multiplicacao = 3 * 2;
console.log(multiplicacao);

const divisao = 3/2;
console.log(divisao);

const resto = 3 % 2;
console.log(resto);

const potenciacao = 3 ** 2;
console.log(potenciacao);
*/



const meuNome = "Alexandre";
const meuPeso = 93.5;
const altura =  1.85;
const imc = meuPeso / (altura * altura);

const fichaCompleta = (`#1 - Paciente: ${meuNome}\n#2 - Altura: ${altura}\n#3 - Peso: ${meuPeso}\n#4 - IMC: ${imc.toFixed(2)} `);

console.log(fichaCompleta);




