"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Identificador {
    _codigo;
    constructor(id) {
        this._codigo = id;
    }
    exibirCodigo() {
        if (typeof this._codigo === 'string') {
            console.log(this._codigo.toUpperCase());
        }
        else {
            console.log(this._codigo);
        }
    }
}
const cliente1 = new Identificador('Alexandre-457');
const cliente2 = new Identificador(567);
cliente1.exibirCodigo();
cliente2.exibirCodigo();
//# sourceMappingURL=04-Exercicio.js.map