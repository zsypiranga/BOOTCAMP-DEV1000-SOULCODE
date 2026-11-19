"use strict";
/*
 Declare um array chamado dados usando anotação explicita que possa guardar uma mistura de elementos dos tipos string ou number (ex: nomes e códigos de identificação).
 */
Object.defineProperty(exports, "__esModule", { value: true });
const dados = ['Alexandre', 1234]; //Para mudar essa prioridade e dizer ao TypeScript "agrupe string | number primeiro e depois transforme tudo isso em um array", você usa os parênteses.
console.log(dados);
console.log(typeof dados);
//# sourceMappingURL=UnionArrays.js.map