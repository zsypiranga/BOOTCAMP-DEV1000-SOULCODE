// CLASS (MOLDE)


/*
O atributo pertence ao objeto, não à classe: Pet.peso dá undefined.
Mudar thor.peso = 9 não altera o bidu, porque são objetos diferentes.
new serve para criar; para usar um objeto que já existe, não se usa new.
Sem new, dá erro: Class constructor Pet cannot be invoked without 'new'.
Objeto literal ({ }) é montado à mão; instância (new) sai do molde. Corrigir um método na classe vale para todos, e no literal é preciso corrigir um por um.

*/


class Perfil {
    nome = 'Visitante';   //STRING
    idade = 0;           // NUMBER
    ativo = true;       // BOOLEAN
    interesses = [];   // ARRAY
}

const perfil = new Perfil() // CRIAÇÃO DO OBJETO
console.log(perfil.nome);
console.log(perfil.idade);
console.log(perfil.ativo);
console.log(perfil.interesses.length);

