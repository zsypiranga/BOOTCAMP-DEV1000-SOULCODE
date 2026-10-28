interface Autenticavel {
    autenticar(senha: string): boolean;
}

class Usuario implements Autenticavel{
    private senhaCorreta: string = "Senha123";

    autenticar(senha: string): boolean {
        return this.senhaCorreta === senha
    }
}
const user = new Usuario()
console.log(user.autenticar("Senha123"));
console.log(user.autenticar("123"));