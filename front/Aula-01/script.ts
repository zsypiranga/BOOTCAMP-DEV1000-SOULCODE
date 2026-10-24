type Id = string | number;

function formatarId(id: Id): string {
    
    const tipoAtual = typeof id;

    if (typeof id === "string") {
        return `O valor "${id.toUpperCase()}" é do tipo: ${tipoAtual}`;
    } else {
        return `O valor "${id.toFixed()}" é do tipo: ${tipoAtual}`;
    }
}

console.log(formatarId(25));
console.log(formatarId('Alexandre-25'));
console.log(formatarId('Alexandre'));