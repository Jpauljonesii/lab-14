'use strict';

let votingRounds = 25;
let productIndexArray = [];

let Elements = document.querySelectorAll('img');
let Container = document.querySelector('section');

let state = new AppState();
state.loadItems();

function randomProductGenerator() {
  return Math.floor(Math.random() * State.allProducts.length);
}

function renderProducts() {
  while (productIndexArray.length < 6) {
    let randomProduct = randomProductGenerator();
    if (!productIndexArray.includes(randomProduct)) {
      productIndexArray.push(randomProduct);
    }
  }

  for (let i = 0; i < Elements.length; i++) {
    let randomIndex = productIndexArray.shift();

    Elements[i].src = state.allProducts[randomIndex].source;
    Elements[i].title = state.allProducts[randomIndex].name;
    Elements[i].alt = state.allProducts[randomIndex].name;
    state.allProducts[randomIndex].timesShown++;
  }
}

function handleImageClick(event) {
  let Clicked = event.target.title;

  for (let i = 0; i < state.allProducts.length; i++) {
    if (Clicked === state.allProducts[i].name) {
      state.allProducts[i].timesClicked++;
      votingRounds--;
      renderProducts();
    }

    if (votingRounds === 0) {
      Container.removeEventListener('click', handleImageClick);
      state.saveToLocalStorage();
    }
  }
}

renderProducts();
Container.addEventListener('click', handleImageClick);
