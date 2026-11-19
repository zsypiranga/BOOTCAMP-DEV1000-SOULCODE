"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// "function" cria uma função chamada buscarPerfil.
// "async" avisa que, dentro dela, o código vai precisar ESPERAR coisas (usar await).
// Sem o async, o await dá erro.
function buscarPerfil() {
    return __awaiter(this, void 0, void 0, function* () {
        // "fetch" faz um pedido para o endereço entre aspas, igual abrir a URL no navegador.
        // O pedido vai pela internet e demora um pouco.
        // "await" faz o código parar nesta linha até a resposta chegar.
        // Quando chega, ela é guardada na variável "resposta".
        const resposta = yield fetch('https://api.github.com/users/zsypiranga');
        // A resposta chega como TEXTO no formato JSON.
        // ".json()" transforma esse texto em um objeto JavaScript de verdade.
        // Isso também leva um tempinho, por isso tem outro "await".
        // ": GitHubUser" diz ao TypeScript que esse objeto tem o formato da interface lá de cima.
        // É isso que faz o editor sugerir .login, .avatar_url e .bio quando você digita "dados."
        const dados = yield resposta.json();
        // Mostra no terminal o texto "Foto:" seguido do link da sua foto.
        console.log('Foto:', dados.avatar_url);
        // Mostra no terminal o texto "Descrição:" seguido da sua bio (ou null, se não tiver).
        console.log('Descrição:', dados.bio);
        // Fecha a função buscarPerfil.
    });
}
// Até aqui a função só EXISTIA. Esta linha é que manda ela RODAR.
// Sem esta linha, nada acontece quando você executa o arquivo.
buscarPerfil();
