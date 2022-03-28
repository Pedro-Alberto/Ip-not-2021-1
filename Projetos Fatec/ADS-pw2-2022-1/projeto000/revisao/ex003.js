var area = document.getElementById('area');
area.addEventListener('click',clicar);
    
function clicar(){
    area.innerText = 'Clicou';
    area.style.background = 'green';

}

function entrar() {
    var a = document.getElementById(`area`);
    a.innerText = `Entrou!`;
    a.style.background = `blue`;
}
function sair() {
    var a = document.getElementById(`area`);
    a.innerText = `Saiu!`;
    a.style.background = `red`;
}
