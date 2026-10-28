interface Notificavel {
    enviarMensagem(texto: string): void;
}

class NotificacaoEmail implements Notificavel {
    enviarMensagem(texto: string): void {
        console.log("E-mail enviado: " + texto);
    }
}

class NotificacaoSMS implements Notificavel {
    enviarMensagem(texto: string): void {
        console.log("SMS enviado: " + texto);
    }
}

function GerenciadorNotificacoes(notificacoes: Notificavel[], texto: string): void {
    for (const notificacao of notificacoes) {
        notificacao.enviarMensagem(texto);
    }
}

const notificacoes: Notificavel[] = [
    new NotificacaoEmail(),
    new NotificacaoSMS()
];

GerenciadorNotificacoes(notificacoes, "Seu pedido foi enviado!");