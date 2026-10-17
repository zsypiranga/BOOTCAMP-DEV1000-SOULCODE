/*
Enunciado: crie uma lâmpada com comodo e ligada. Ela deve começar desligada, oferecer ligar e desligar sem retorno útil e consultarSituacao retornando texto. 
*/

class Lampada {
        comodo;
        ligada = false;

        constructor(comodo){
            this.comodo = comodo;
        }

       ligar(){
        this.ligada = true;
       }

       desligar(){
         this.ligada = false;
       }

       consultarSituacao(){

        if(this.ligada){
            return `LIGADA`
        }else{
            return `DESLIGADA`;
        }
       }
}

const quarto = new Lampada('Quarto');
console.log(`Situação INICIAL: ${quarto.consultarSituacao()}`); //DESLIGADA
console.log(`Comodo: ${quarto.comodo}\n`)

quarto.ligar();
console.log(`Situação ATUAL: ${quarto.consultarSituacao()}`); //LIGADA



quarto.desligar();
console.log(`Situação Atual: ${quarto.consultarSituacao()}`); //DESLIGADO