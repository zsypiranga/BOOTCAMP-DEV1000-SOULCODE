
class Livro {
    titulo;
    paginas;
    lido;

    constructor(titulo,paginas){
        const tituloLimpo = titulo.trim();

        if(tituloLimpo.length === 0){
            throw new Error('Título obrigatório.')
        }
        if(!Number.isInteger(paginas) || paginas <= 0){
            throw new Error('Número de páginas inválido.')
        }

       this.titulo = tituloLimpo;
       this.paginas = paginas;
       this.lido = false;
    } 
        marcarComoLido(){
           this.lido = true; 
        }

        descrever(){
            if(this.lido === true){
                return `${this.titulo} | ${this.paginas} páginas | lido`
            }
                return `${this.titulo} | ${this.paginas} páginas | não lido`
            
        }
       
    }


const livro1 = new Livro('  Dom Casmurro  ', 256)
console.log(livro1.descrever());
livro1.marcarComoLido();
console.log(livro1.descrever());

try{
    new Livro('  ', 10)

}catch(erro){
    if(erro instanceof Error){
        console.log(`Erro: ${erro.message}`);
    }

}