// "interface" cria a descrição de um formato de objeto.
// "GitHubUser" é o nome que escolhemos para esse formato.
// Ela não busca nada e não roda nada: só diz ao TypeScript o que esperar.
// Depois de convertido para .js, esse bloco inteiro some.
interface GitHubUser {
  // O campo "login" existe e é texto (string). É o seu nome de usuário.
  login: string;

  // O campo "avatar_url" é texto: o LINK da sua foto, não a foto em si.
  avatar_url: string;

  // O campo "bio" é a sua descrição.
  // "string | null" quer dizer: texto OU nada.
  // O GitHub manda null quando o perfil não tem descrição.
  bio: string | null;
}

// "function" cria uma função chamada buscarPerfil.
// "async" avisa que, dentro dela, o código vai precisar ESPERAR coisas (usar await).
// Sem o async, o await dá erro.
async function buscarPerfil() {

  // "fetch" faz um pedido para o endereço entre aspas, igual abrir a URL no navegador.
  // O pedido vai pela internet e demora um pouco.
  // "await" faz o código parar nesta linha até a resposta chegar.
  // Quando chega, ela é guardada na variável "resposta".
  const resposta = await fetch('https://api.github.com/users/zsypiranga');

  // A resposta chega como TEXTO no formato JSON.
  // ".json()" transforma esse texto em um objeto JavaScript de verdade.
  // Isso também leva um tempinho, por isso tem outro "await".
  // ": GitHubUser" diz ao TypeScript que esse objeto tem o formato da interface lá de cima.
  // É isso que faz o editor sugerir .login, .avatar_url e .bio quando você digita "dados."
  const dados: GitHubUser = await resposta.json();

  // Mostra no terminal o texto "Foto:" seguido do link da sua foto.
  console.log('Foto:', dados.avatar_url);

  // Mostra no terminal o texto "Descrição:" seguido da sua bio (ou null, se não tiver).
  console.log('Descrição:', dados.bio);

// Fecha a função buscarPerfil.
}

// Até aqui a função só EXISTIA. Esta linha é que manda ela RODAR.
// Sem esta linha, nada acontece quando você executa o arquivo.
buscarPerfil();