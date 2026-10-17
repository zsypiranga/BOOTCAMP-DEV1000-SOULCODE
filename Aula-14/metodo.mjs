class Produto{
    preco;

    constructor(preco){
        this.preco = preco;
    }

        calcularTotal(quantidade){   //função
        return this.preco * quantidade
    }

}

const produto = new Produto(30);
const total = produto.calcularTotal(3) //SEGUNDO JEITO DE FAZER

console.log(total);
console.log(produto.calcularTotal(3)); // PRIMEIRO JEITO DE FAZER