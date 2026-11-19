"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botao = document.querySelector('#btn-contador');
const contador = document.querySelector('#contador');
let total = 0;
botao.addEventListener('click', (e) => {
    total++;
    contador.textContent = total.toString();
});
//# sourceMappingURL=app.js.map