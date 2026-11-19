"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function primos() {
    let numero = 2;
    let total = 0;
    while (numero <= 50) {
        let divisor = 2;
        let primo = true;
        while (divisor < numero) {
            if (numero % divisor === 0) {
                primo = false;
            }
            divisor++;
        }
        if (primo) {
            console.log(numero);
            total++;
        }
        numero++;
    }
    console.log("Total de primos:", total);
}
primos();
//# sourceMappingURL=exercicio-04.js.map