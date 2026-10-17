/*Enunciado: um produto possui preço 100. Crie calcularComDesconto(percentual), 
que devolve o preço simulado. O percentual deve ser finito e estar entre 0 e 100; 
valores inválidos provocam um erro. O preço original permanece igual.  */

class Produto{
    preco = 100;

    calcularComDesconto(percentual){
        if(!Number.isFinite(percentual) || percentual < 0 || percentual > 100 ){
            throw new Error('Percentual Inválido');
        }else{
            const desconto = this.preco * percentual / 100;
            const precoFinal = this.preco - desconto;

            return precoFinal;
        }
    }

}

const produto = new Produto();
console.log(`VALOR INICIAL: ${produto.preco}`)
const produtoComDesconto = produto.calcularComDesconto(150);
console.log(`VALOR COM DESCONTO: ${produtoComDesconto}`);
