//PARTE 4 - COM CONSCTRUCTOR - E COM DOIS METODOS

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
};



const thor = new Pet('Thor', 'cachorro', 3, 12.5, 'Carla');
const mia = new Pet('Mia', 'gato', 2, 4.2, 'Rafael');
const pacoca = new Pet('Paçoca', 'cachorro', 7, 8, 'Juliana');
const bidu = new Pet('Bidu', 'cachorro', 5, 25, 'Marcos');

const agenda = [thor,mia,pacoca,bidu];
let total = 0;
let i = 0;
console.log('===================PARTE 4===================')

for (let pet of agenda){

 total += pet.calcularPrecoBanho()
 console.log(`${agenda[i].apresentar()} | Banho : R$ ${agenda[i].calcularPrecoBanho().toFixed(2)}`);
 i++;
 
}
console.log(`Total do dia: R$ ${total.toFixed(2)}`)



