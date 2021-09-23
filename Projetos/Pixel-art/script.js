const divColor = document.querySelectorAll('.color');
const firstColor = document.querySelector('.color');
const divPixelBoard = document.querySelector('#pixel-board');
const buttonClear = document.querySelector('#clear-board');
const buttonGenerateBoard = document.querySelector('#generate-board');
const inputBoardSize = document.querySelector('#board-size');

window.onload = () => {
  firstColor.style.backgroundColor = 'black';
  firstColor.classList.toggle('selected');
};

function colorsPalette() {
  const colors = ['green', 'red', 'yellow', 'brown', 'purple'];
  for (let i = 1; i < divColor.length; i += 1) {
    const random = Math.floor(Math.random() * colors.length);
    divColor[i].style.backgroundColor = colors[random];
    colors.splice(random, 1);
  }
} colorsPalette();

function createPixels() {
  for (let i = 0; i < 5; i += 1) {
    const divOfPixel = document.createElement('div');
    divOfPixel.classList.add('div-pixel');
    divPixelBoard.appendChild(divOfPixel);
    for (let x = 0; x < 5; x += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      divOfPixel.appendChild(pixel);
    }
  }
} createPixels();

function removePixel() {
  const thor = document.querySelectorAll('.div-pixel');
  for (let i = 0; i < thor.length; i += 1) {
    thor[i].remove();
  }
}

function boardSizeValid() {
  for (let i = 0; i < inputBoardSize.value; i += 1) {
    const divOfPixel = document.createElement('div');
    divOfPixel.classList.add('div-pixel');
    divPixelBoard.appendChild(divOfPixel);
    for (let x = 0; x < inputBoardSize.value; x += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      divOfPixel.appendChild(pixel);
    }
  }
}

function boardSizeFifty() {
  for (let i = 0; i < 50; i += 1) {
    // for para nova div sendo esta filha da div pixel-board
    const newDivOfPixel = document.createElement('div');
    divPixelBoard.appendChild(newDivOfPixel);
    newDivOfPixel.classList.add('div-pixel');
    for (let x = 0; x < 50; x += 1) {
      // for para criar 5 div em cada 1 newDivOfPixel
      const newPixel = document.createElement('div');
      newPixel.classList.add('pixel');
      newDivOfPixel.appendChild(newPixel);
    }
  }
}

function createNewPixels() {
  buttonGenerateBoard.addEventListener('click', () => {
    removePixel();
    if (inputBoardSize.value === '') {
      alert('Board inválido! Coloque um valor!');
    } else if (inputBoardSize.value < 5) {
      // a função ja criar tudo com tamanho de 5
      createPixels();
    } else if (inputBoardSize.value > 50) {
      // chama a função que cria no tamanho 50
      boardSizeFifty();
    } else {
      boardSizeValid();
    }
  });
} createNewPixels();

const pixel = document.querySelectorAll('.pixel');

function selectedPalette() {
  // pecorrer o array
  for (let i = 0; i < divColor.length; i += 1) {
    // adicionar o evento
    divColor[i].addEventListener('click', () => {
      // remove a classe no array
      for (let x = 0; x < divColor.length; x += 1) {
        divColor[x].classList.remove('selected');
      }
      // adiciona a classe
      divColor[i].classList.add('selected');
    });
  }
} selectedPalette();

function paintPixel() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', (event) => {
      const paint = event;
      const colorPaint = document.querySelector('.selected').style.backgroundColor;
      paint.target.style.backgroundColor = colorPaint;
    });
  }
} paintPixel();

function clearColors() {
  buttonClear.addEventListener('click', () => {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = 'white';
    }
  });
} clearColors();