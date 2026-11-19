"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Relatorio {
    imprimir() {
        console.log('Eu sou o método Imprimir');
    }
    exportarJSON() {
        return 'Sou método de exportar JSON';
    }
}
const teste = new Relatorio();
teste.imprimir();
console.log(teste.exportarJSON());
//# sourceMappingURL=06-Exercicio.js.map