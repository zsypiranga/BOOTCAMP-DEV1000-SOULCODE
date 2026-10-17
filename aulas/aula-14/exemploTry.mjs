/*

Crie Turma com nome e um array de alunos inicialmente vazio
Cria duas turmas, adiciona Ana á primeira e verifique se a segunda continua vazia

*/ 

class Turma {
    nome;
    alunos;

    constructor(nome){
        this.nome = nome;
        this.alunos = []
    }

    adicionarAluno(aluno){
        this.alunos.push(aluno);
    }


}

const manha = new Turma('Turma da Manhã');
const noite = new Turma('Turma da Noite');

manha.adicionarAluno('Alexandre');

console.log(manha.alunos.length); //conta a quantidade de elemento dentro do array
console.log(noite.alunos.length);
