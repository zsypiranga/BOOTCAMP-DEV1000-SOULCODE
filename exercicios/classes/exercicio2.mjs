class Playlist{
    nome;
    musicas = [];

    constructor(nome){
        const nomePlaylist = nome.trim();
        if(nomePlaylist.length == 0){
            throw new Error('Nome da playlist obrigatório.')
        }

        this.nome = nomePlaylist;
        this.musicas = [];
    }

    adicionar(musica){
        const musicaLimpa = musica.trim();
        if(musicaLimpa.length === 0 ){
            throw new Error('Música obrigatória.')
        }

        this.musicas.push(musicaLimpa);
        
    }

    tamanho(){
        return this.musicas.length
    }

}

const estudo = new Playlist('Estudo');
const treino = new Playlist('Treino');

estudo.adicionar('musica 1'); 
estudo.adicionar('musica 2');

treino.adicionar('musica 1');

console.log(`Estudo: ${estudo.tamanho()} música(s)`);
console.log(`Treino: ${treino.tamanho()} música(s)`);


try{
    treino.adicionar(' ');

}catch(erro){
    if(erro instanceof Error){
        console.log(`Erro: ${erro.message}`);
    }
}




