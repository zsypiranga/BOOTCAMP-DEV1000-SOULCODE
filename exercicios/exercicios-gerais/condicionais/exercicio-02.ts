/*
Ex 1.2 — Calculadora de Imposto de Renda
Elabore um algoritmo que receba o salário bruto de um funcionário e aplique alíquotas condicionais: até R$ 2.000
(Isento); de R$ 2.001 a R$ 3.500 (10%); acima de R$ 3.500 (20%). Retorne o valor final com desconto.

*/



function impostoDeRenda(salario: number){
    let aliquotas = 0;

    if(salario > 2000 && salario <= 3500){
        aliquotas = 0.1;
    }else if(salario > 3500){
        aliquotas = 0.2
    }
    const salarioDescontado =   salario * (1 - aliquotas);
    return salarioDescontado;
}



console.log(`O salario com desconto é:` + impostoDeRenda(2500))
console.log(`O salario com desconto é:` + impostoDeRenda(2000))
console.log(`O salario com desconto é:` + impostoDeRenda(3500))
console.log(`O salario com desconto é: ${impostoDeRenda(3500.01).toFixed(2)}`)