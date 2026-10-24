function primos(): void {
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