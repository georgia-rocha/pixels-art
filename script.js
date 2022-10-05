window.onload = function () {
    const corPreta = document.getElementsByClassName('color')[0];
    corPreta.className = 'color selected';

}

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

let palette = document.getElementById('color-palette');
palette.addEventListener('click', function (event) {
    const escolhendoCor = document.getElementsByClassName('selected')[0];
    escolhendoCor.classList.remove('selected');
    event.target.classList.add('selected');
});

let arrayColor = ['black', 'red', 'blue', 'yellow'];
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
        divs.style.marginLeft = '10px';
    }
}
criandoPaleta()

const botaoCoresAleatorias = document.createElement('button');
botaoCoresAleatorias.id = 'button-random-color';
botaoCoresAleatorias.innerHTML = 'Cores aleatórias';
sessao.appendChild(botaoCoresAleatorias);

botaoCoresAleatorias.addEventListener('click', function () {
    const cores = document.getElementsByClassName('color');
    for (let index = 1; index < cores.length; index += 1) {
        cores[index].style.background = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    }
});

const botaoResetColor = document.createElement('button');
botaoResetColor.id = 'clear-board';
botaoResetColor.innerHTML = 'Limpar';
criandoMain.appendChild(botaoResetColor);

const pixelsEmBranco = document.getElementsByClassName('pixel');
botaoResetColor.addEventListener('click', function (event) {
    for (let index = 0; index < pixelsEmBranco.length; index += 1) {
        pixelsEmBranco[index].style.background = 'white';
    } console.log('test');
});


function criandoQuadro() {
    const quadro = document.createElement('div');
    quadro.id = 'pixel-board';
    criandoMain.appendChild(quadro);

    for (let index2 = 0; index2 < 5; index2 += 1) {
        const linha = document.createElement('div');

        for (let index = 0; index < 5; index += 1) {

            const pixels = document.createElement('div');
            pixels.className = 'pixel';
            pixels.style.width = '40px';
            pixels.style.height = '40px';
            pixels.style.display = 'inline-block';
            pixels.style.border = '1px solid black';
            pixels.style.background = 'white';
            linha.appendChild(pixels);


        }
        quadro.appendChild(linha);
    }
}
criandoQuadro()

const corSelecionada = document.getElementsByClassName('color selected');
console.log(corSelecionada);
const corPintando = document.querySelector('#pixel-board');
corPintando.addEventListener('click', function (event) {
    if(event.target.className === 'pixel') {
        event.target.style.background = corSelecionada[0].style.background;
    }
})

