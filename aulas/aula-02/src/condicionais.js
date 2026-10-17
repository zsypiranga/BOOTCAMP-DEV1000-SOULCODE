console.log("#1");

let nota = 7;

if (nota >= 7){
    console.log("Aprovado!");
}else{
    console.log("Reprovado");
}

console.log("\n")
//Notas Intermediarias 

console.log("#2");
nota = 4;

if (nota >= 7){
    console.log("Aprovado!");
}else if(nota >= 4){
    console.log("Recuperação!");
}else{
    console.log("Reprovado!");
}

console.log("\n")

console.log("#3");
nota = 5;
if(nota >= 7){

    console.log("Aprovado!")
}else if(nota >= 4){
    console.log("Recuperação online");
}else if(nota >= 2){
    console.log("Recuperação Presencial");
}else{
    console.log("Reprovado!");
}

console.log("\n")
console.log("#4");
let opcao = 1;

if(opcao === 1){
    console.log("Hamburguer");
} else if(opcao === 2){
    console.log("Pizza");
} else if(opcao === 3){
    console.log("Salada");
} else{
    console.log("Opção inválida");
}


console.log("\n")
console.log("#5");
opcao = 2;

switch (opcao){
    case 1:
        console.log("Hamburguer");
        break;
    case 2:
        console.log("Pizza");   
        break;
    case 3:
        console.log("Salada");
        break;
    default:
        console.log("Opção inválida");
        break;
}

 
