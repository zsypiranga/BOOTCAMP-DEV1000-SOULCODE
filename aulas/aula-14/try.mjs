// TRATAMENTO DE ERRO
class Vaga {
    numero;

    constructor(numero){
        if(!Number.isInteger(numero) || numero <= 0){
            throw new Error('Número da Vaga inválido');
        }
        this.numero = numero;
    }
}

try{
    const vaga = new Vaga(-5);
    console.log(`Vaga ${vaga.numero} criada`)
}catch(erro){
    if(erro instanceof Error){
        console.log(erro.message);
    }
}

console.log('Programa continua');
