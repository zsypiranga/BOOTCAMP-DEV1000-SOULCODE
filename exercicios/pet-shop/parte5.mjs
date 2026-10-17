//PARTE 5 - COM CONSCTRUCTOR - E COM DOIS METODOS

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
    };

    apresentar(){
        return `${this.nome} (${this.especie}, ${this.idade} anos) - tutor(a): ${this.dono}`;

    };

    calcularPrecoBanho(){
        if(this.peso > 20){
            return 90;
        }else if(this.peso > 10){
            return 70; 
        }else{
            return 50;
        };

    };

    fazerAniversario(){
        this.idade += 1;
    }


};



const thor = new Pet('Thor', 'cachorro', 3, 12.5, 'Carla');
const mia = new Pet('Mia', 'gato', 2, 4.2, 'Rafael');
const pacoca = new Pet('Paçoca', 'cachorro', 7, 8, 'Juliana');
const bidu = new Pet('Bidu', 'cachorro', 5, 25, 'Marcos');


console.log('===================PARTE 5 - PARTE A ===================')

console.log(pacoca.apresentar());
pacoca.fazerAniversario();
console.log(pacoca.apresentar());


console.log('===================PARTE 5 - PARTE B ===================')
const agenda = [thor,mia,pacoca,bidu];
let cachorro = 0;
let gato = 0;

for(const pet of agenda){
    if(pet.especie === "cachorro"){
        cachorro += 1;
    }else if(pet.especie === "gato"){
        gato += 1;
    }
}

console.log(`Cachorros: ${cachorro} | Gatos: ${gato}`);