
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

console.log(manha.alunos.length);