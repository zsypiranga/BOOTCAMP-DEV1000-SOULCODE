class Produto{
    nome;
    preco;

    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

}

const produto = new Produto('Chá Mate', 10);
console.log(produto.preco);

//mudando o valor do preço
produto.preco = 30;

console.log(produto.preco);