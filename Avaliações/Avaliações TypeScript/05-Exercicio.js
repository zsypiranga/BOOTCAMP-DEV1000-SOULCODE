"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    senhaCorreta = "Senha123";
    autenticar(senha) {
        return this.senhaCorreta === senha;
    }
}
const user = new Usuario();
console.log(user.autenticar("Senha123"));
console.log(user.autenticar("123"));
//# sourceMappingURL=05-Exercicio.js.map