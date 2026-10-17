/*
Crie a classe Porta:

Dado private aberta: boolean, começando em false (porta fechada).
Dado public readonly sala: string, recebido no constructor (o nome da sala não muda depois).
Métodos: abrir(), fechar() e estaAberta(), que devolve o valor.
Fora da classe, crie uma porta, abra, feche e mostre o estado com console.log.
Depois, tente escrever porta.aberta = true e porta.sala = 'Sala 2'.

*/


class Porta{
    private aberta: boolean = false

    public readonly sala: string; 

    public constructor(sala: string){
            this.sala  = sala;
    }

    abrir(){
        this.aberta = true;
    }

    fechar(){
        this.aberta = false;
    }
    estaAberta() : boolean{
       return this.aberta;
    }
}

const porta = new Porta('Sala'); //criei um objeto
porta.abrir() //abrir a porta 
porta.fechar() //fechado

console.log(`SITUAÇÃO ATUAL: ${porta.estaAberta()}`)
console.log(porta.sala)
porta.aberta = true;
porta.sala  = 'Sala 2';

console.log(porta.sala)
