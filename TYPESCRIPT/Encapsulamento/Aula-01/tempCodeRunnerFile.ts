class Lampada{
    private ligada: boolean = false;

    ligar(){
        this.ligada = true;
    }
    desligar(){
        this.ligada = false;
    }
    estaligada(){
        if(this.ligada == true){
            console.log('LIGADO')
        }
        if(this.ligada == false){
            console.log('DESLIGADO')
        }
    }

}

const a = new Lampada();
a.estaligada(); //desligado
a.ligada = true;  //private
a.ligar(); // ligado
a.estaligada();