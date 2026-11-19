"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotificacaoEmail {
    enviarMensagem(texto) {
        console.log("E-mail enviado: " + texto);
    }
}
class NotificacaoSMS {
    enviarMensagem(texto) {
        console.log("SMS enviado: " + texto);
    }
}
function GerenciadorNotificacoes(notificacoes, texto) {
    for (const notificacao of notificacoes) {
        notificacao.enviarMensagem(texto);
    }
}
const notificacoes = [
    new NotificacaoEmail(),
    new NotificacaoSMS()
];
GerenciadorNotificacoes(notificacoes, "Seu pedido foi enviado!");
//# sourceMappingURL=09-Exercicio.js.map