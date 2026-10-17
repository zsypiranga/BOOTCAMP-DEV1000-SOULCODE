class  Ingresso{
    filme;
    assento;
    tipo;

    constructor(filme,assento,tipo = 'inteira'){
        if(filme.trim() == ""){
            throw new Error('Filme Obrigatório.');
        }else if(!Number.isInteger(assento) || assento < 1 || assento > 120){
              throw new Error('Assento Inválido.');
        }else if(tipo !== 'inteira' && tipo !== 'meia'){
            throw new Error('Tipo de ingresso inválido.');
        }else{
            this.filme = filme.trim();
            this.assento = assento;
            this.tipo = tipo;
        }
      
    }

    calcularPreco(){
        if (this.tipo == 'inteira' || this.tipo == 'Inteira' || this.tipo == 'INTEIRA'){
            return 32;
        }else if(this.tipo == 'meia' || this.tipo == 'MEIA' || this.tipo == 'Meia'){
            return 16;
        }
    }

    descrever(){

        return `${this.filme} | assento ${this.assento} | ${this.tipo} | R$ ${this.calcularPreco().toFixed(2)}`

    }
}

const cliente = new Ingresso('O Último Farol', 10);
const cliente2 = new Ingresso('O Último Farol', 11, 'meia'); 
console.log(cliente.descrever());
console.log(cliente2.descrever());  

try{
  
    const cliente3 = new Ingresso('O Último Farol', 130, 'meia');  
    console.log(cliente3.descrever());  

}catch(erro){
    if(erro instanceof Error){
       console.log(`Erro: ${erro.message}`);
    }

}





