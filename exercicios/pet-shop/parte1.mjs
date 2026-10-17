//PARTE 1
//OBJETO LITERAL

const thor = {
    nome: 'Thor',
    especie: 'cachorro',
    idade: 3,
    peso: 12.5,
    tutor: 'Carla',
    
    apresentar(){
        return `${this.nome} (${this.especie}, ${this.idade} anos) - tutor(a): ${this.tutor}`;
    }
};


console.log('===================PARTE 1===================')
console.log(thor.nome);
console.log(thor.apresentar());


