class Identificador{

    private _codigo: string | number;

    constructor(id: string | number){
        this._codigo = id;
    }

    exibirCodigo(): void{
        if(typeof this._codigo === 'string'){
            console.log(this._codigo.toUpperCase())
        }else{
            console.log(this._codigo);
        }
    }

}

const cliente1 = new Identificador('Alexandre-457');
const cliente2 = new Identificador(567);

cliente1.exibirCodigo();
cliente2.exibirCodigo();