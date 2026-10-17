// Arrays

const familia = ["Alexandre", "Danubia", "Eduardo", "Rafaela"];


console.log(familia[0]); //primeiro elemento do array

console.log(familia[familia.length - 1]); //ultimo elemento do array

console.log(familia.length); //exibe a quantidade de elementos do arrayw

familia.push("Tobias"); // Adiciona o elemtento no final do array
console.log(familia);

familia.pop(); // remove o ultimo elemento da array
console.log(familia);

familia.unshift("João"); // adiciona o elemento na primeira posição do array
familia.shift(); // remove da primeira posição

familia.splice(2,0,"Lucas"); // insere na terceira posição do array (indice 2) - (NAO SUBTITUIR)
console.log(familia);

familia.splice(2,1); //remove o elemnto da terceira posição do array
console.log(familia);

//Objetos
const aluno = {nome: "Alexandre", idade: 50, curso: "Engenharia"};
console.log(aluno);

console.log(aluno.nome);
console.log(aluno["nome"]);

aluno.idade = 25;
console.log(aluno);


//Instrução FOR

const notas = [8,7,9,6,10];

console.log(notas);
console.log(notas[0]);
console.log(notas[1]);
console.log(notas[2]);
console.log(notas[3]);
console.log(notas[4]);

for(let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}


let soma = 0;
for (let i = 0; i < notas.length; i++){
    soma = soma + notas[i];
}

console.log(soma); //exibe a soma das notas do array

const notas1 = [8, 7, 9];
notas1.push(10);        // linha A
notas1[0] = 100;         // linha B
//notas1 = [1, 2, 3];     

console.log(notas1);