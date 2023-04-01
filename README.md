![img](pixelsArt.gif)
<summary><strong>Para clonar e testar</strong></summary><br />

1. Clone o repositório
* `git clone git@github.com:georgia-rocha/pixels-art.git`
* Entre na pasta do repositório que você acabou de clonar:

2. Instale as dependências:
* `npm install`

3. Iniciar a aplicação:
* `Abrir Live Server`

4. Testar Aplicação
** Testes feitos pela Trybe para critério de avaliação
* `npm run cypress:open`

## Objetivo

* Este projeto teve o intuito de desenvolver um editor de arte em pixels, onde a pessoa usuária pode escolher uma cor na paleta de cores e pintar o quadro em branco, o usuário também pode alterar o tamanho do quadro, alterar as cores da paleta e caso a pagina seja recarregada o desenho e o tamanho do quadro são salvos através do LocalStorage.

O que foi praticado:

* JavaScript: DOM, Eventos, Web Storage, Array e loop For, Funções;
  
## Requisitos Obrigatórios 100%

- [x] 1 - Adicione à página o título "Paleta de Cores".
- [x] 2 - Adicione à página uma paleta contendo quatro cores distintas.
- [x] 3 - Adicione a cor preta como a primeira cor da paleta de cores.
- [x] 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores.
- [x] 5 - Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página.
- [x] 6 - Adicione à página um quadro contendo 25 pixels.
- [x] 7 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.
- [x] 8 - Defina a cor preta como cor inicial da paleta de cores
- [x] 9 - Crie uma função para selecionar uma cor na paleta de cores e preencha os pixels no quadro.
- [x] 10 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.
- [x] 11 - Crie um botão que retorne a cor do quadro para a cor inicial.
- [x] 12 - Crie uma função para salvar e recuperar o seu desenho atual no localStorage

## Requisitos Bônus 100%

- [x] 13 - Crie um input que permita à pessoa usuária preencher um novo tamanho para o quadro de pixels.
- [x] 14 - Crie uma função que limite o tamanho mínimo e máximo do quadro de pixels.
- [x] 15 - Crie uma função para manter o tamanho novo do board ao recarregar a página.
