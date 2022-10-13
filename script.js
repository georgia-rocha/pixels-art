window.onload = function () {
  
}

function title() {
  const tituloH1 = document.createElement('h1');
  tituloH1.innerHTML = 'Paleta de Cores';
  tituloH1.id = 'title';
  document.body.appendChild(tituloH1);
}
title()

const criandoMain = document.createElement('main');
document.body.appendChild(criandoMain);

const cores = document.getElementsByClassName('color');

let sessao = document.createElement('section');
sessao.id = 'color-palette';
criandoMain.appendChild(sessao);

const botaoCoresAleatorias = document.createElement('button');
botaoCoresAleatorias.id = 'button-random-color';
botaoCoresAleatorias.innerHTML = 'Cores aleatórias';
criandoMain.appendChild(botaoCoresAleatorias);

botaoCoresAleatorias.addEventListener('click', function () {
  for (let index = 1; index < cores.length; index += 1) {
    cores[index].style.background = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
  }
  localStorage.setItem('colorPalette', JSON.stringify(sessao.innerHTML));
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
  const corPreta = document.getElementsByClassName('color')[0];
  corPreta.className = 'color selected';
}
criandoPaleta()

const sessaoLocalStorage = JSON.parse(localStorage.getItem('colorPalette'));
if (sessaoLocalStorage){
  sessao.innerHTML = sessaoLocalStorage;
}

const inputPixel1 = document.createElement('input');
inputPixel1.type = 'number';
inputPixel1.min = '1';
inputPixel1.id = 'board-size';
inputPixel1.className = 'form-control';

criandoMain.appendChild(inputPixel1);

const buttonPx = document.createElement('button');
buttonPx.id = 'generate-board';
buttonPx.innerText = 'VQV';
criandoMain.appendChild(buttonPx);

let numeroDePixels = 5;

function criandoQuadro() {
  const quadro = document.createElement('div');
  quadro.id = 'pixel-board';
  criandoMain.appendChild(quadro);

  for (let index2 = 0; index2 < numeroDePixels; index2 += 1) {
    const linha = document.createElement('div');
    linha.style.margin = '0px';
    linha.style.height = '40px';
    linha.style.width = '80%';
    linha.style.marginLeft = '10%';


    for (let index = 0; index < numeroDePixels; index += 1) {

      const pixels = document.createElement('div');
      pixels.className = 'pixel';
      pixels.style.width = '40px';
      pixels.style.height = '40px';
      pixels.style.display = 'inline-block';
      pixels.style.border = '1px solid black';
      pixels.style.background = 'white';
      pixels.style.padding = '0px';
      pixels.style.margin = '0px';
      linha.appendChild(pixels);


    }
    quadro.appendChild(linha);
  }
}
criandoQuadro()

function pintandoPx() {
  const corSelecionada = document.getElementsByClassName('color selected');
  const corPintando = document.querySelector('#pixel-board');
  corPintando.addEventListener('click', function (event) {
    if (event.target.className === 'pixel') {
      event.target.style.background = corSelecionada[0].style.background;
    }
  })

} pintandoPx()

function validacaoPixel() {
  const invalidPixel1 = inputPixel1.value < 5;
  const invalidPixel2 = inputPixel1.value > 50;

  if (!inputPixel1.value) {
    return alert('Board inválido!');
  }
  else if (invalidPixel1) {
    return inputPixel1.value = 5;
  } else if (invalidPixel2) {
    return inputPixel1.value = 50;
  }
}

buttonPx.addEventListener('click', alterandoPixels);

function alterandoPixels() {
  validacaoPixel();
  const quadroInicialPixel = document.getElementById('pixel-board');
  quadroInicialPixel.remove();
  numeroDePixels = inputPixel1.value;

  criandoQuadro();
  pintandoPx();

}