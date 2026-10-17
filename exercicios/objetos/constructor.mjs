class Aluno {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const aluno = new Aluno("Alexandre", 24)

console.log(aluno.nome);
console.log(aluno.idade);


class Cliente {
    nome;

    constructor(nomeRecebido){
        this.nome = nomeRecebido
    }
}

const cliente = new Cliente('Alexandre');
console.log(cliente.nome);