"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatarId(id) {
    const tipoAtual = typeof id;
    if (typeof id === "string") {
        return `O valor "${id.toUpperCase()}" é do tipo: ${tipoAtual}`;
    }
    else {
        return `O valor "${id.toFixed()}" é do tipo: ${tipoAtual}`;
    }
}
console.log(formatarId(25));
console.log(formatarId('Alexandre-25'));
console.log(formatarId('Alexandre'));
//# sourceMappingURL=script.js.map