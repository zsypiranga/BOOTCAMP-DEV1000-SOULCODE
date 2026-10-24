/*

Ex 1.1 — Classificação de Triângulos
Crie uma função que receba a medida de três lados de um triângulo e informe se ele é Equilátero (3 lados iguais),
Isósceles (2 lados iguais) ou Escaleno (3 lados diferentes). Valide antes se os lados formam um triângulo válido

*/

function classificarTriangulo(lado1: number, lado2: number, lado3: number): string {

    if (lado1 + lado2 <= lado3 || lado2 + lado3 <= lado1 || lado1 + lado3 <= lado2) {
        return 'Triângulo inválido.'
    }

    if (lado1 === lado2 && lado1 === lado3) {
        return 'Equilátero'
    }


    if (lado1 === lado2 || lado2 === lado1 || lado1 === lado3 || lado2 === lado3 || lado3 === lado1 || lado3 === lado2) {
        return 'Isósceles'
    }

    return 'Escaleno'
}

console.log(classificarTriangulo(1, 3, 3))
console.log(classificarTriangulo(1, 5, 3))
console.log(classificarTriangulo(1, 2, 3))