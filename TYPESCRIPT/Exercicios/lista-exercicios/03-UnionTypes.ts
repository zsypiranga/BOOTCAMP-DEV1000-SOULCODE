/*
 Crie uma variável chamada nota que aceite tanto um number (ex: 9.5) quanto uma string (ex: conceitos como "A", "B"). Use Union Types e atribua dois valores válidos sequencialmente.
 */

 let nota: number | string =  9.5;
 nota = "A";
 nota = "B";

 console.log(nota); //Vai mostrar o mais recente que foi atribuido
 //R: É quando uma variavel pode aceitar mais de 1 tipo de dados (pode ter number e string)
 