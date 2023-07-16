'use strict';

let votingRounds = 25;
let productIndexArray = [];

<<<<<<< HEAD
let imgElements = document.querySelectorAll('img');
let imgContainer = document.querySelector('section');
=======
let Elements = document.querySelectorAll('img');
let Container = document.querySelector('section');
>>>>>>> 0710a7f19e157ea8dd0d15dbd5d992a7cdfd4649

let state = new AppState();
state.loadItems();

<<<<<<< HEAD
function generateRandomProduct() {
  return Math.floor(Math.random() * state.allProducts.length);
}

function renderProductImages() {
  while (productIndexArray.length < 6) {
    let randomProductIndex = generateRandomProduct();
    if (!productIndexArray.includes(randomProductIndex)) {
      productIndexArray.push(randomProductIndex);
    }
  }

  for (let i = 0; i < imgElements.length; i++) {
    let randomIndex = productIndexArray.shift();

    imgElements[i].src = state.allProducts[randomIndex].source;
    imgElements[i].title = state.allProducts[randomIndex].name;
    imgElements[i].alt = state.allProducts[randomIndex].name;
=======
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
>>>>>>> 0710a7f19e157ea8dd0d15dbd5d992a7cdfd4649
    state.allProducts[randomIndex].timesShown++;
  }
}

function handleImageClick(event) {
<<<<<<< HEAD
  let imageClicked = event.target.title;

  for (let i = 0; i < state.allProducts.length; i++) {
    if (imageClicked === state.allProducts[i].name) {
      state.allProducts[i].timesClicked++;
      votingRounds--;
      renderProductImages();
    }

    if (votingRounds === 0) {
      imgContainer.removeEventListener('click', handleImageClick);
=======
  let Clicked = event.target.title;

  for (let i = 0; i < state.allProducts.length; i++) {
    if (Clicked === state.allProducts[i].name) {
      state.allProducts[i].timesClicked++;
      votingRounds--;
      renderProducts();
    }

    if (votingRounds === 0) {
      Container.removeEventListener('click', handleImageClick);
>>>>>>> 0710a7f19e157ea8dd0d15dbd5d992a7cdfd4649
      state.saveToLocalStorage();
    }
  }
}

<<<<<<< HEAD
renderProductImages();
imgContainer.addEventListener('click', handleImageClick);
=======
renderProducts();
Container.addEventListener('click', handleImageClick);
>>>>>>> 0710a7f19e157ea8dd0d15dbd5d992a7cdfd4649
