class Produto{
    private _nome: string;
    private _preco: number;

    constructor(nome: string, preco: number){
        this._nome = nome;
        this._preco = preco;
    }

    get preco(): number{
        return this._preco
    }

    set preco(valor: number){
        if (valor < 0){
            throw new Error("Preço não pode ser menor que zero")
        }
        this._preco = valor;
    }
}

const computador = new Produto('Computador',1500); //CRIAÇÃO DO OBJETO
computador.preco = 2000; //DANDO PREÇO NOVO

console.log(computador); //EXIBINDO TODOS OS DADOS DO OBJETO