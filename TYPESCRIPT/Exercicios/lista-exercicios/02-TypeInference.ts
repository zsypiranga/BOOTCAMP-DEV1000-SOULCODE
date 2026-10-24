/*
Declare uma variável chamada isLogado e atribua o valor true a ela, sem usar anotação explícita. Deixe que o TypeScript faça a inferência. Qual é o tipo inferido?
*/

const isLogado = true;

console.log(typeof isLogado); //tipo
console.log(isLogado) //valor

//Resposta: É quando TS deduzir o tipo da variavel mesmo que voce nao declare a tipagem da variavel 