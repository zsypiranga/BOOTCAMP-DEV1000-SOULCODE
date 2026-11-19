const botao = document.querySelector('#btn-contador') as HTMLButtonElement;
const contador = document.querySelector('#contador')!;
let total: number = 0;

botao.addEventListener('click', (e: MouseEvent) =>{
    total++;
    contador.textContent = total.toString();
})
