/*
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({input,output});

//CACHE - CONVERSÃO DE TIPO DA VARIAVEL 
//VARIAVEL GLOBAL
const qtde = Number(await rl.question('INFORME QUANTAS NOTAS DESEJA INSERIR: '));

const notas = [];
let i = 0;

while (i < qtde){
    const nota = Number(await rl.question(`Digite a ${i + 1}ª nota: `));
    notas.push(nota);
    i++;
}

let soma = 0;
for (let nota of notas){
    soma += nota;
}

const media = soma / qtde;

console.log(`A media é ${media.toFixed(4)}`);

rl.close();
*/

import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({input,output});

//CACHE - CONVERSÃO DE TIPO DA VARIAVEL 
//VARIAVEL GLOBAL
const qtde = Number(await rl.question('INFORME QUANTAS NOTAS DESEJA INSERIR: '));

const notas = [];
let i = 0;

while (i < qtde){
    const nota = Number(await rl.question(`Digite a ${i + 1}ª nota: `));

    if(isNaN(nota)){
        console.log('valor inválido, digite um número.');
        continue;
    }

    notas.push(nota);
    i++;
}

let soma = 0;
for (let nota of notas){
    soma += nota;
}

const media = soma / qtde;

console.log(`A media é ${media.toFixed(4)}`);

rl.close();
