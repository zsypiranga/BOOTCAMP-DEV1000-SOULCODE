//CRIANDO UMA FUNÇÃO SIMPLES

function saudar(){
    console.log("Hello, World");
}

saudar();

// IMAGINE QUE VOCE DESEJA ACRESCENTAR UM TEXTO AO RESULTADO DE UMA VARIAVEL
function saudar2(nome){
    console.log(`Olá ${nome}`);
}

saudar2("Alexandre");

//EXIBA NOME E IDADE JUNTOS
function apresenta(nome,idade){
    console.log(`${nome} tem ${idade} anos`);
}

apresenta("Alexandre", 24);



function apresenta2(nome,idade){
    
}

apresenta2(50, "Alexandre");

//CONTRUINDO A FUNÇÃO PARA RECEBER PARAMETROS COMO OBJETOS (A ORDEM DOS PARAMETROS PODERÁ SER TROCADA NA EXECUÇÃO)

function apresenta3 ({nome, idade}){
    console.log(`${nome} tem ${idade} anos`);
}

apresenta3({idade: 50, nome: "Alexandre"});

//ARMAZENA EM UMA VARIÁVEL QUE RESULTADO QUE ACONTECE NA EXECUÇÃO (RETURN)

function dobro(numero){
    return numero * 2;
}

const resultado = dobro(5);
console.log(resultado);

//TRANFORME O EXERCICIO DE ONTEM EM UMA FUNÇÃO
//CRIA UMA FUNÇÃO CALCULARIMC QUE RECEBE DO USUÁRIO PESO (KG) E ALTURA (M) E RETORNA O IMC (FORMULA IMC - PESO / (ALTURA X ALTURA) ) MOSTRE O RESULTADO DE 70KG E 1,75M COM 2 CASA DECIMAIS 