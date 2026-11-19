const input = document.querySelector('#texto') as HTMLInputElement;
const aviso = document.querySelector('#resultado')!;

input.addEventListener('input', () =>{
    
    if(input.value.length >= 3){
        aviso.textContent = 'Tamanho válido!';
    }else{
        aviso.textContent = 'Muito curto!';
    }

})


