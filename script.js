window.onload = function initial() {
  const paletteInitalColor = document.getElementsByTagName('li')[0];
  paletteInitalColor.className = 'color selected';
};

const palette = document.getElementById('color-palette');
const quadro = document.getElementById('pixel-board');
const buttonResetColor = document.getElementById('clear-board');
const buttonColorAleatorias = document.getElementById('button-random-color');
const pixel = document.getElementsByClassName('pixel');
const buttonNewQuadro = document.getElementById('generate-board');
const inputPixels = document.getElementById('board-size');
let numberPixels = 5;

// Criando paleta de cores que irão ser usadas para pintar o quadro

function criandoPaleta() {
  const colors = ['black', 'red', 'green', 'blue'];
  colors.forEach((color) => {
    const colorLi = document.createElement('li');
    colorLi.className = 'color';
    palette.appendChild(colorLi);
    colorLi.style.backgroundColor = color;
  });
}
criandoPaleta();

// Add evento de click para trocar cores da paleta, porém a primeira cor deve permanecer com background 'black' e a paleta deve ser salva no LocalStorage

buttonColorAleatorias.addEventListener('click', () => {
  const cores = document.getElementsByClassName('color');
  for (let index = 1; index < cores.length; index += 1) {
    cores[index].style.backgroundColor = `rgb(${Math
      .floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math
      .floor(Math.random() * 255)})`;
  }
  localStorage.setItem('colorPalette', JSON.stringify(palette.innerHTML));
});

// buscando cores salvas da paleta do LocalStorage

const getLocalStorage = JSON.parse(localStorage.getItem('colorPalette'));
if (getLocalStorage) {
  palette.innerHTML = getLocalStorage;
}

// pegando tamanho de pixels salvo no localStorage

const getNumberPixels = localStorage.getItem('boardSize');
if (getNumberPixels) {
  numberPixels = getNumberPixels;
} else {
  numberPixels = 5;
}

// Criando quadro de pixels para ser pintado

function criandoQuadro() {
  for (let index = 0; index < numberPixels; index += 1) {
    const linha = document.createElement('tr');
    for (let i = 0; i < numberPixels; i += 1) {
      const coluna = document.createElement('td');
      coluna.className = 'pixel';
      linha.appendChild(coluna);
    }
    quadro.appendChild(linha);
  }
}
criandoQuadro();

// Add validação do valor do input para alteração de tamanho do quadro

function validation() {
  const invalidPixel1 = inputPixels.value < 5;
  const invalidPixel2 = inputPixels.value > 50;

  if (!inputPixels.value) {
    return alert('Board inválido!');
  }
  if (invalidPixel1) {
    inputPixels.value = 5;
  } if (invalidPixel2) {
    inputPixels.value = 50;
  }
}

// Atualiza o quadro de acordo com o valor passado pelo input 'board-size

function updateQuadro() {
  validation();
  quadro.innerHTML = '';
  numberPixels = inputPixels.value;
  localStorage.setItem('boardSize', numberPixels);
  criandoQuadro();
}

buttonNewQuadro.addEventListener('click', updateQuadro);

// Add evento de click para trocar a cor selecionada da tabela

palette.addEventListener('click', (event) => {
  const escolhendoCor = document.getElementsByClassName('selected')[0];
  escolhendoCor.classList.remove('selected');
  event.target.classList.add('selected');
});

// Função para pintar o quadro com a cor selecionada da paleta e criando chave no localStorage para guardar o desenho

function pintandoQuadro() {
  const corSelecionada = document.getElementsByClassName('color selected');
  quadro.addEventListener('click', ({ target }) => {
    if (target.className === 'pixel') {
      target.style.backgroundColor = corSelecionada[0].style.backgroundColor;
      localStorage.setItem('pixelBoard', JSON.stringify(quadro.innerHTML));
    }
  });
}
pintandoQuadro();

// Recuperando desenho do LocalStorage

const getDesing = JSON.parse(localStorage.getItem('pixelBoard'));
if (getDesing) {
  quadro.innerHTML = getDesing;
}

// Add evento de click no botão Limpar, para resetar a cor padrão dos pixels

buttonResetColor.addEventListener('click', () => {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});
