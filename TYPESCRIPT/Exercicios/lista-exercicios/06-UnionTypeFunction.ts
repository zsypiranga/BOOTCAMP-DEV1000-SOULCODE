/*
 Crie uma função chamada exibirID que receba um parâmetro id do tipo Union Type (string | number) e imprima a mensagem "O ID é: " + id no console.
 */

 function exibirID(id: string | number):void{
    console.log("O ID é: " + id)
 }

 exibirID(50);
 exibirID("ABC-50");

 //UNIÃO DE DOIS TIPOS 