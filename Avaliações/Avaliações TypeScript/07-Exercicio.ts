abstract class FiguraGeometrica{
    abstract calcularArea() : number;
}

class Quadrado extends FiguraGeometrica{
    constructor(public lado: number) {
        super();
    }

    calcularArea(): number {
        return this.lado * this.lado
    }

}


class Circulo extends FiguraGeometrica{
    constructor(public raio: number){
        super();
    }

    calcularArea(): number {
        return  Math.PI * this.raio * this.raio;
    }

}

const bola = new Circulo(5);
console.log('O numero da area é ' + bola.calcularArea().toFixed(2))

const quadrado = new Quadrado(4);
console.log('O numero da area é ' + quadrado.calcularArea())