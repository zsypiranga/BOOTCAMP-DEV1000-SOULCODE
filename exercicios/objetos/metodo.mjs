class Aluno{
    nome;
    idade;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    //metodo - uma ação
    apresentar(){
        return `Sou ${this.nome} e tenho ${this.idade} anos.`;
    }
    
}

const aluno = new Aluno('Alexandre', 24);
console.log(aluno.apresentar());

/*

Enunciado: uma papelaria precisa cadastrar um produto com nome e preço. Crie uma classe, cadastre um caderno de R$ 25,00 e apresente uma descrição usando um método.
Identifique os dados
Nome é texto; preço é número. Ambos pertencem a cada produto.
Planeje a criação e a saída
O construtor recebe os dados. O método descrever devolve a mensagem; console.log fica responsável por exibi-la.

*/

class Produto{
    nomeProduto;
    preco;

    constructor(nomeDoProduto,precoDoProduto){
        this.nomeProduto= nomeDoProduto;
        this.preco = precoDoProduto;
    }

    exibir(){
       return `Produto: ${this.nomeProduto}\nPreço: R$ ${this.preco.toFixed(2)}`;
    }

}


const produto = new Produto('Caderno', 25);
console.log(produto.exibir())