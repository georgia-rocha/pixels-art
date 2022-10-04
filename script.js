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

function criandoPaleta() {
    let arrayColor = ['black','red','blue','yellow'];
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
