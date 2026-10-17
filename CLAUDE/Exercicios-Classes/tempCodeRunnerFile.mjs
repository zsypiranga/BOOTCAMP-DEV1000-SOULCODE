
class Carrinho{
    itens = [];

    adicionarItem(nome,preco,quantidade){
        const nomeLimpo = nome.trim()
        if(nomeLimpo.length === 0){
            throw new Error('Nome do item obrigatório.');
        }

        if(!Number.isFinite(preco) || preco < 0){
            throw new Error('Preço inválido.');
        }


        if(!Number.isInteger(quantidade) || quantidade < 1){
            throw new Error('Quantidade inválida');
        }
        this.itens.push({nome: nomeLimpo, preco: preco, quantidade: quantidade});
    }

    calcularTotal(){
        let total = 0
        for(const item of this.itens){
            total += item.preco * item.quantidade
        }
        return total;

    }

}

const item = new Carrinho()

item.adicionarItem('Caderno', 12.5, 2);
item.adicionarItem('Caneta', 3, 4);
item.adicionarItem('Borracha', 2, 1);

for (const produto of item.itens){
    console.log(`${produto.nome} x${produto.quantidade} - R$ ${(produto.preco * produto.quantidade).toFixed(2)}`)
}

console.log(`Total: R$ ${item.calcularTotal().toFixed(2)}`);


try {
    item.adicionarItem('Mochila', -10, 1);
} catch (erro) {
    console.log(`Erro: ${erro.message}`);
}