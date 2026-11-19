const botao = document.getElementById("btn-tema") as HTMLButtonElement;

function atualizarTexto(): void {
    if (document.body.classList.contains("tema-claro")) {
        botao.textContent = "🌙 Modo Escuro";
    } else {
        botao.textContent = "☀️ Modo Claro";
    }
}


botao.addEventListener("click", () => {
    document.body.classList.toggle("tema-claro");

    const claro = document.body.classList.contains("tema-claro");
    localStorage.setItem("tema", claro ? "claro" : "escuro");

    atualizarTexto();
});
