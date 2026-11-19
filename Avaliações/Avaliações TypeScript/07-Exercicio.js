"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FiguraGeometrica {
}
class Quadrado extends FiguraGeometrica {
    lado;
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
class Circulo extends FiguraGeometrica {
    raio;
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}
const bola = new Circulo(5);
console.log('O numero da area é ' + bola.calcularArea().toFixed(2));
const quadrado = new Quadrado(4);
console.log('O numero da area é ' + quadrado.calcularArea());
//# sourceMappingURL=07-Exercicio.js.map