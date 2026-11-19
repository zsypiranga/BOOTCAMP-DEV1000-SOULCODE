"use strict";
/*
 Na função exibirID da questão anterior, adicione uma verificação com typeof.
 Se o id for string, exiba em letras maiúsculas (toUpperCase()). Se for number, exiba o valor multiplicado por 2.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function exibirID(id) {
    if (typeof id === "string") {
        console.log("O ID é: " + id.toUpperCase());
    }
    else {
        console.log("O ID é: " + id * 2);
    }
}
exibirID("Alexandre");
//# sourceMappingURL=07-TypeNarrowing.js.map