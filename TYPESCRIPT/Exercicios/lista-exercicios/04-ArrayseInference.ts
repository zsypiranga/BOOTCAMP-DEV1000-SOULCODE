/*
 Crie um array de frutas via inferência com os elementos ["maçã", "banana", "laranja"]. O que ocorre se você tentar executar frutas.push(10)?
 */

 const frutas = ["maça","banana","laranja"]; //STRING
 frutas.push(10); //ERRO
 frutas.push("Melão");

 console.log(frutas)
 console.log(typeof frutas)

 //R: Argument of type 'number' is not assignable to parameter of type 'string'.