class Animal{
    protected nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    emitirSom(): string{
        return "Som genérico"
    }
}

class Cachorro extends Animal{
    
    emitirSom(): string {
        return "Au Au!"
    }
}

class Gato extends Animal{
    emitirSom(): string {
        return "Miau!"
    }
}


const mia = new Gato("Mia");
const bicho = new Animal("Bicho");
console.log(mia.emitirSom());
console.log(bicho.emitirSom());