// TEMA 
const tema = document.querySelector('#btn-tema');
tema.addEventListener('click', () =>{
 const situacaoAtual = document.body.classList.toggle('dark-mode')
  tema.textContent = situacaoAtual  ? '☀️ Modo CLaro' : '🌙 Modo Escuro';

})


//REAÇÃO DE CURTIR
const curtir = document.querySelector('#btn-curtir');
const contadorCurtir = document.querySelector('#cont-curtir');
let totalCurtir = 0;
curtir.addEventListener('click', () =>{
   totalCurtir++;
  contadorCurtir.textContent = totalCurtir;
})

//REAÇÃO DE AMEI
const amei = document.querySelector('#btn-amei');
const contadorAmei = document.querySelector('#cont-amar');
let totalAmar = 0;
amei.addEventListener('click', () =>{
  totalAmar++;
  contadorAmei.textContent = totalAmar;
})

//REAÇÃO DE SHOW
const show = document.querySelector('#btn-show');
const contadorShow = document.querySelector('#cont-fogo');
let totalShow = 0;
show.addEventListener('click', () =>{
  totalShow++;
  contadorShow.textContent = totalShow;
})

//REAÇÃO DE DUVIDA 
const duvida = document.querySelector('#btn-duvida');
const contadorDuvida = document.querySelector('#cont-duvida');
let totalDuvida = 0;

duvida.addEventListener('click', () => {
  totalDuvida++;
  contadorDuvida.textContent = totalDuvida;
})






const formulario = document.querySelector('.form-comentario')
const comentarios = document.querySelector('#input-comentario');

formulario.addEventListener('submit', (evento) =>{
evento.preventDefault();
 

const textoLimpo = comentarios.value.trim();



  

})

