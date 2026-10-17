//Incremento de uma variável usando o operador ++ (acrescenta 1 ao valor)
let qtde = 5;
console.log(qtde);
qtde++;
console.log(qtde);

// Incremento de valor maior que 1 (por exemplo,, acrescenta 5 ao valor)
qtde += 5 // 11
console.log(qtde);

// Decremento de uma variável usando o operador -- (subtrai 1 do valor)
qtde--
console.log(qtde);

// Decremento de valor maior que 1 (por exemplo, subtrai 5 do valor)
qtde -= 5;
console.log(qtde);

// Interação com o usuário usando await
import readline from "node:readline/promises";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const nome = await rl.question("Digite seu nome: ");
const idade = await rl.question("Digite sua idade: ");


console.log(`Olá, ${nome}! Você tem ${idade} anos.`);


rl.close();

//WHILE
let contador = 1;
while (contador <= 5){
    console.log(contador);
    contador++;
}

//USANDO O LOOP WHILE, IMPRIMA A TABUADA DO 7

let multiplicador = 1;

while (multiplicador <= 10){
    const resultado = 7 * multiplicador;
    console.log(`7 x ${multiplicador} = ${resultado}`);
    multiplicador++
}

// Calcular a média dos valores de um array
const notas = [8, 6, 9, 7];

let i = 0;
let soma = 0;

while (i < notas.length){
    soma += notas[i];
    i++
}

  console.log(soma);


  if (notas.length > 0) {
  const media = soma / notas.length;


  console.log(`Soma das notas: ${soma}`);
  console.log(`Quantidade de notas: ${notas.length}`);
  console.log(`Média: ${media.toFixed(2)}`);
} else {
  console.log("Não há notas para calcular a média.");
}


/* Construa um programa que peça ao usuário uma quantidade de notas a inserir e aprtir disso,
crie um loop while que receba as n notas informadas pelo usuário e aprtir disso, as armazene em um array e posteriormente
calcule e exiba para o usuário a média aritmética com 4 casas decimais */
import readline from "node:readline/promises";

const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let notasUsuario = [];
let y = 1;
let notas1 = 0;
 
while (y <= 4){
    
    notas1 = await r2.question(`${y} NOTA: `);
    notasUsuario.push(notas1);
    y++;
}

let x = 0;
let total = 0;

while (x <= 4){
    total += notasUsuario[x];
    x++;
}

console.log(total);


r2.close();