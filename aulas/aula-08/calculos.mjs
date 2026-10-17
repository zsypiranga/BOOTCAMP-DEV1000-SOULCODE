/*
crie uma função calcularIMC que recebe do usuário peso (kg) e altura (m) e
retorna o IMC. Fórmula: IMC = peso / (altura × altura). Mostre o resultado
de 70 kg e 1,75 m com 2 casas decimais.
*/
// Exportar permite importar esta função em outros arquivos.
export function calcularMedia(notas) {
    let soma = 0;


    for (const nota of notas) {
        soma += nota;
    }


    return soma / notas.length;
}


export function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}


