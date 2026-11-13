// ===== TEMA =====
const temaEscuro = document.querySelector('#btn-tema');

temaEscuro.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});



const curtir = document.querySelector('#btn-curtir');
const numeroDeCurtida = document.querySelector('#cont-curtir');
let totalCurtidas = 0;

curtir.addEventListener('click', () => {
  totalCurtidas++;
  numeroDeCurtida.textContent = totalCurtidas;
});



const amei = document.querySelector('#btn-amei');
const numeroDeAmei = document.querySelector('#cont-amar'); 
let totalAmei = 0;

amei.addEventListener('click', () => {
  totalAmei++;
  numeroDeAmei.textContent = totalAmei;
});



const show = document.querySelector('#btn-show');
const numeroDeShow = document.querySelector('#cont-fogo');  
let totalShow = 0;

show.addEventListener('click', () => {
  totalShow++;
  numeroDeShow.textContent = totalShow;
});



const duvida = document.querySelector('#btn-duvida');
const numeroDeDuvida = document.querySelector('#cont-duvida');
let totalDuvida = 0;

duvida.addEventListener('click', () => {
  totalDuvida++;
  numeroDeDuvida.textContent = totalDuvida;
});