"use strict";
/*
 Crie um objeto produto contendo nome ("Notebook") e preco (3500) por inferência. Explique o que acontece ao tentar atribuir a string "R$ 3500" ao campo preco.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const produto = {
    nome: "Notebook",
    preco: 3500
};
produto.preco = "R$ 3500,00";
//R: dá erro, pois o preço está como inferido como number e estou tentando atribuir um valor do tipo string 
//# sourceMappingURL=09-ObjectInference.js.map