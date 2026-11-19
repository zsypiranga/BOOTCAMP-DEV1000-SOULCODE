"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input = document.querySelector('#texto');
const aviso = document.querySelector('#resultado');
input.addEventListener('input', () => {
    if (input.value.length >= 3) {
        aviso.textContent = 'Tamanho válido!';
    }
    else {
        aviso.textContent = 'Muito curto!';
    }
});
//# sourceMappingURL=app.js.map