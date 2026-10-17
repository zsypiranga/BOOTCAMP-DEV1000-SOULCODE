
/*Exercício 1 Operações
Calcule: a) 12 + 4 * 2; b) (12 + 4) * 2; c) 17 % 5; d) 3 ** 2; e) 9 / 2.
*/

console.log("#1 - EXERCÍCIO");

let resultado = 12 + 4 * 2;
console.log(resultado);

resultado = (12 + 4) * 2;
console.log(resultado)

resultado = 17 % 5;
console.log(resultado);

resultado = 3 ** 2;
console.log(resultado);

resultado = 9 / 2;
console.log(resultado);


/*
Exercício 2 Número e texto
Preveja as três saídas e explique a diferença.
console.log(20 + 5);
 console.log("20" + 5);
 console.log(Number("20") + 5);
*/
console.log("\n")
console.log("#2 - EXERCÍCIO");

console.log('20 + 5  IMPRIMIR SOMA: ' + (20 + 5) + ' MOTIVO: APENAS SOMA DE NUMERO COM NUMERO');
console.log('"20" + 5  IMPRIMIR:' + ("20" + 5) + ' MOTIVO: 20 vira string e e acaba concatenando com 5, por conta do +');
console.log(Number("20") + '5  IMPRIMIR SOMA ' + (20 + 5) + ' MOTIVO: ESTAMOS TRANSFORMANDO O VALOR DA STRING EM NUMBER E VAI SOMAR COM 5');


console.log("\n")
console.log("#3 - EXERCÍCIO");

/*
Exercício 3 Atualização de uma variável
Qual é o valor final de pontos? Mostre os valores intermediários.
let pontos = 10;
 pontos += 5;
 pontos *= 2;
 pontos--;
 console.log(pontos);
*/

/*
Exercício 4 Comparações
Indique true ou false: a) 7 >= 7; b) 8 < 3; c) 5 === "5"; d) 5 !== "5"; e) 10 <= 9.
*/
console.log("\n");
console.log("#4 - EXERCÍCIO");

console.log("A - TRUE");
console.log("B - FALSE");
console.log("C - FALSE");
console.log("D - FALSE");
console.log("E - FALSE");


/*
Exercício 5 Condições combinadas
Considere idade = 17, temIngresso = true e bloqueado = false. Calcule: a) idade >= 18 && temIngresso; b) idade >= 18 || temIngresso; c) !bloqueado.
*/

console.log("\n")
console.log("#5 - EXERCÍCIO");

const idade = 17;
const temIngresso = true;
const bloqueado = false;

if(idade >= 18 && temIngresso == true){
    console.log("ACESSO PERMITIDO!");
}else if(idade >= 18 || temIngresso == true){
    console.log("ITEM FALTANDO");
}else if(!bloqueado){
    console.log("ACESSO PERMITIDO!");
}else{
    console.log("ACESSO NEGADO")
}


/*
Exercício 6 Chaves e indentação
A segunda mensagem depende da idade? O que será mostrado? Reescreva com indentação para deixar os blocos claros.
let idade = 16;
 if (idade >= 18) {
 console.log("Maior de idade");
 }
 console.log("Fim");
Exercício 7 Ordem das condições
Com nota = 8, uma sequência testa primeiro nota >= 5 e mostra “Recuperação”; depois, em else if, testa nota >= 7 e mostra “Aprovado”. Qual mensagem aparece? Como corrigir a ordem?
10 Exercícios de programação
Use valores definidos no código. Nos exercícios 8 a 16, escreva um programa completo para cada problema. Considere entradas do tipo e da faixa informados.
Exercício 8 Par ou ímpar
Declare um número inteiro e informe se ele é par ou ímpar. Teste com 8 e 15. Dica: use o resto da divisão por 2.
Exercício 9 Sinal do número
Declare um número e informe “Positivo”, “Negativo” ou “Zero”. Teste com 4, -3 e 0.
Exercício 10 Nota e recuperação
Para uma nota numérica de 0 a 10, mostre “Aprovado” se nota >= 7, “Recuperação” se nota >= 5 e menor que 7, ou “Reprovado” nos demais casos. Teste 7, 5 e 4.
Exercício 11 Acesso com duas condições
Uma pessoa pode entrar se tiver pelo menos 18 anos E tiver ingresso. Mostre “Entrada permitida” ou “Entrada negada”. Teste 20 com ingresso e 20 sem ingresso.
Exercício 12 Desconto
Uma compra de pelo menos R$ 300 recebe 15% de desconto. Calcule o valor final com if. Teste com 300 e 200.
Exercício 13 Menu com switch
Use uma opção numérica: 1 mostra “Cadastrar”; 2 mostra “Consultar”; 3 mostra “Sair”. Qualquer outro valor mostra “Opção inválida”. Teste 2 e 9.
Exercício 14 Falta de break
Preveja a saída deste código e depois corrija para mostrar somente “Um” quando opcao vale 1.
let opcao = 1;
 switch (opcao) {
   case 1:
 	console.log("Um");
   case 2:
 	console.log("Dois");
   default:
 	console.log("Outro");
 }
Exercício 15 Valores iguais com tipos diferentes
No exercício 13, troque a opção numérica por "2". Qual será a saída? Corrija convertendo a variável com Number antes do switch.
Exercício 16 Desafio de validação
Amplie o exercício 10: se a nota numérica for menor que 0 OU maior que 10, mostre “Nota inválida”. Só classifique notas dentro da faixa. Teste -1, 6 e 11. 
*/