/*
 Na função exibirID da questão anterior, adicione uma verificação com typeof. 
 Se o id for string, exiba em letras maiúsculas (toUpperCase()). Se for number, exiba o valor multiplicado por 2.
 */

 function exibirID(id: string | number): void{
    if(typeof id  === "string"){
        console.log("O ID é: " + id.toUpperCase())
    }else{
        console.log("O ID é: " + id * 2)
    }
 }

 exibirID("Alexandre");