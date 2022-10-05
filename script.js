const body = document.getElementsByTagName('body')[0];
function title() {
    const tituloH1 = document.createElement('h1');
    tituloH1.innerHTML = 'Paleta de Cores';
    tituloH1.id = 'title';
    document.body.appendChild(tituloH1);
}
title()
const criandoMain = document.createElement('main');
document.body.appendChild(criandoMain);

const sessao = document.createElement('section');
sessao.id = 'color-palette';
criandoMain.appendChild(sessao);

let arrayColor = ['black','red','blue','yellow'];
function criandoPaleta() {
    for (let index = 0; index < 4; index += 1) {
        const divs = document.createElement('div');
        divs.className = 'color';
        sessao.appendChild(divs);
        divs.style.background = arrayColor[index];
        divs.style.width = '40px';
        divs.style.height = '40px';
        divs.style.display = 'inline-block';
        divs.style.border = '1px solid black';
    }
}
criandoPaleta()

const botaoCoresAleatorias = document.createElement('button');
botaoCoresAleatorias.id = 'button-random-color';
botaoCoresAleatorias.innerHTML = 'Cores aleatórias';
sessao.appendChild(botaoCoresAleatorias);

botaoCoresAleatorias.addEventListener('click', function(){
    const cores = document.getElementsByClassName('color');
    for (let index = 1; index < cores.length; index += 1){
        cores[index].style.background = 'rgb(' + Math.floor(Math.random() * 255)  + ',' + Math.floor(Math.random() * 255)  + ',' + Math.floor(Math.random() * 255)  + ')';
    }
})