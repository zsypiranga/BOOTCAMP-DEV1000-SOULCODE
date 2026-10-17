//OBJETO ALUNO
const aluno = {
    nome: 'Ana',
    idade: 19,
    curso: 'Ciência da Computação'
};

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);

/* 
const aluno    <> Variável que se refere  ao objeto
{...}          <> Conteúdo do Objeto
nome: 'Ana'    <> Propriedade nome com o valor Ana (do tipo string)
idade:  19    <> Propriedade com o valor 19 (do tipo number)
curso: 'CDC'   <> Propriedade com o valor 'Ciência da Computação' (do tipo string)
*/

aluno.idade = 20;
console.log(aluno.idade);


//CRIANDO A CLASSE ALUNO

class Aluno {
    nome = "";
    idade = 0;
}

const aluno1 = new Aluno();
aluno1.nome = 'Ana';
aluno1.idade = 19;

console.log(aluno1);

const aluno2 = new Aluno()
aluno2.nome = 'Alexandre';
aluno2.idade = 24;

console.log(typeof aluno1);
console.log(aluno2);