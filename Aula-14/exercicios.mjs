/*

Três exercícios curtos, uns 15 minutos no total.

1. Classe e objetos (atributo pertence ao objeto)
Crie a classe Contador com o atributo valor = 0 e 
dois métodos: incrementar(), que soma 1 e não devolve nada, e consultar(), que devolve o valor. Crie dois objetos (a e b), chame a.incrementar() duas vezes e imprima a.consultar() e b.consultar().
Antes de rodar, diga o que espera ver nos dois e por quê.

2. isFinite e ! (o que ficou pendente)
Sem rodar, diga se cada expressão dá true ou false, escrevendo o passo a passo (primeiro o Number.isFinite, depois o !):

!Number.isFinite(20)
!Number.isFinite("abc")
!Number.isFinite(Infinity)

Depois confira no terminal.

3. throw (sem try/catch)
Crie a classe Conta com saldo = 100 e o método sacar(valor). 
Se valor não for um número finito, ou for menor ou igual a 0, ou for maior que o saldo, use throw new Error(...). 
Caso contrário, diminua o saldo, sem devolver nada. 
Teste com sacar(30) e imprima o saldo. Deixe um saque inválido por último no arquivo, porque ele vai parar o programa.

*/

console.log('================== EXERCICIO 1 ====================');
class Contador{
    valor = 0;

    incrementar(){
     this.valor = this.valor + 1;
    }

    consultar(){
         return this.valor;
    }

}

const a = new Contador();
const b = new Contador()


a.incrementar(); // 1
a.incrementar(); //2




console.log(`CONSULTAR VALOR A: ${a.consultar()}`);
console.log(`CONSULTAR VALOR B: ${b.consultar()}`);



console.log('================== EXERCICIO 2 ====================');

console.log(!Number.isFinite(20)); //Acredito que vai dar falso, ja que o number é 20 é o numero finito, mas tem o ! que inverte a condição 
console.log(!Number.isFinite("abc")) // verdadeiro, por causa da inversão do !
console.log(!Number.isFinite(Infinity)) //Underfiend