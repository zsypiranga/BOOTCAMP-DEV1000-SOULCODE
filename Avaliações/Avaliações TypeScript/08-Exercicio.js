"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pedido {
    status = "pendente";
    atualizarStatus(novoStatus) {
        this.status = novoStatus;
        console.log(this.status);
    }
}
const pedido = new Pedido();
pedido.atualizarStatus("pago");
pedido.atualizarStatus("enviado");
pedido.atualizarStatus("entregue"); //erro
//# sourceMappingURL=08-Exercicio.js.map