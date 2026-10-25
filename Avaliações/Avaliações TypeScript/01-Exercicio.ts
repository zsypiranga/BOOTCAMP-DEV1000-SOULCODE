class Pessoa{
    public nome: string;
    private _idade: number;
    protected _cpf: string;

    constructor(nome: string, idade: number, cpf: string){
        this.nome = nome;
        this._idade = idade;
        this._cpf = cpf;
    }

    getIdade(): number{
        return this._idade;
    }

     setIdade(novaIdade: number): void{
        if(novaIdade >= 1){
            this._idade = novaIdade
            console.log(`${this.nome} tem ${this._idade} anos`)
            
        }else{
              console.log('Apenas numeros positivos')
        }

      

    }
         

}

const Alexandre = new Pessoa("Alexandre", 18, "000.000.000-00")
console.log(Alexandre.getIdade()); //exibi a idade atual, atribuida na criação do objeto
Alexandre.setIdade(-5); // vai exibir o console.log('Apenas numeros positivos'), pois o numero é negativo
Alexandre.setIdade(25) // atualiza a idade e exiba 
