/*
 Crie uma variável chamada statusPedido utilizando Literal Union Types que aceite exatamente e apenas três valores: "pendente", "aprovado" ou "cancelado".
 */

let status: "pendente" | "aprovado" | "cancelado" = "pendente"; 

status = "aprovado";    // ok
status = "Aprovado";    // erro
