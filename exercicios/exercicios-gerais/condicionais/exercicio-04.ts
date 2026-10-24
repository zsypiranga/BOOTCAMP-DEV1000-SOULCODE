/*

Ex 1.4 — Sistema de Validação de Acesso
Crie um script de login que verifique o nome de usuário e senha. Se o usuário for "admin" e a senha "1234" ,
retorne "Acesso Total". Se o usuário for "user" e a senha "1234" , retorne "Acesso Limitado". Caso contrário,
retorne "Acesso Negado".

*/

function validaAcesso(login: string,senha: number){
    if(login === 'admin' && senha === 1234){
        return 'Acesso Total'
    }else if(login === 'user' && senha === 1234){
        return 'Acesso Limitado'
    }
    return 'Acesso Negado'
}

console.log(validaAcesso('admin', 1234));
