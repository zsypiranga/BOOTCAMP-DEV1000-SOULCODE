class Pet{
    nome;
    especie;
    idade;
    peso;
    dono;

    constructor(nome,especie,idade,peso,dono){
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
        this.peso = peso;
        this.dono = dono;
    }
}

const thor = new Pet('Thor', 'cachorro', 3, 12.5, 'Carla');
const mia = new Pet('Mia', 'gato', 2, 4.2, 'Rafael');
const pacoca = new Pet('Paçoca', 'cachorro', 7, 8, 'Juliana');
const bidu = new Pet('Bidu', 'cachorro', 5, 25, 'Marcos');


console.log('===================PARTE 2===================')
console.log(thor.nome);
console.log(bidu.peso);
