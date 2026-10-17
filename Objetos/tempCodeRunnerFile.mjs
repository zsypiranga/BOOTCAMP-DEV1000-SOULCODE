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

let i = 0;

while(i < 10){
    
    const produto = new Produto('Caderno', 25);
    console.log(produto.exibir())
    i++;
}