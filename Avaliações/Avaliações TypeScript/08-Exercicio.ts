type StatusPedido = "pendente" | "pago" | "enviado" | "cancelado";

class Pedido {
    private status: StatusPedido = "pendente";

    atualizarStatus(novoStatus: StatusPedido): void {
        this.status = novoStatus;
        console.log(this.status);
    }
}

const pedido = new Pedido();

pedido.atualizarStatus("pago");
pedido.atualizarStatus("enviado");
pedido.atualizarStatus("entregue") //erro