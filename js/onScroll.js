"use strict"

function animacionImage() {
    let reveals = document.querySelector(".imageFeature");
    let windowHeight = window.innerHeight;
    let elementTop = reveals.getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals.classList.add("active");
    } else {
      reveals.classList.remove("active");
    }
}

window.addEventListener("scroll", animacionImage);

function animacionImage2() {
    let reveals2 = document.querySelector(".imageFeature2");
    let windowHeight = window.innerHeight;
    let elementTop = reveals2.getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
        reveals2.classList.add("active");
    } else {
      reveals2.classList.remove("active");
    }
}

window.addEventListener("scroll", animacionImage2);



function animacionImage3() {
    let reveals2 = document.querySelector(".imageFeature3");
    let windowHeight = window.innerHeight;
    let elementTop = reveals2.getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
        reveals2.classList.add("active");
    } else {
        reveals2.classList.remove("active");
    }
}

window.addEventListener("scroll", animacionImage3);

function animacionText() {
    let reveals2 = document.querySelector(".textFeature");
    let windowHeight = window.innerHeight;
    let elementTop = reveals2.getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
        reveals2.classList.add("active");
    } else {
      reveals2.classList.remove("active");
    }
}

window.addEventListener("scroll", animacionText);

function animacionText2() {
    let reveals2 = document.querySelector(".textFeature2");
    let windowHeight = window.innerHeight;
    let elementTop = reveals2.getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
        reveals2.classList.add("active");
    } else {
      reveals2.classList.remove("active");
    }
}

window.addEventListener("scroll", animacionText2);

function animacionText3() {
    let reveals2 = document.querySelector(".textFeature3");
    let windowHeight = window.innerHeight;
    let elementTop = reveals2.getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
        reveals2.classList.add("active");
    } else {
      reveals2.classList.remove("active");
    }
}

window.addEventListener("scroll", animacionText3);

/**PUNTO 9 */

function animacionTituloPersonajes() {
    let reveals2 = document.querySelector(".tituloPersonajes");
    let windowHeight = window.innerHeight;
    let elementTop = reveals2.getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
        reveals2.classList.add("activeTituloPersonajes");
    } else {
      reveals2.classList.remove("activeTituloPersonajes");
    }
}

window.addEventListener("scroll", animacionTituloPersonajes);

function animacionTituloGoku() {
    let reveals = document.querySelector(".tituloGoku");
    let titulo = document.querySelector(".tituloPersonajes");
    let windowHeight = window.innerHeight;
    let elementTop = titulo.getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
        reveals.classList.add("activeTituloGoku");
    } else {
      reveals.classList.remove("activeTituloGoku");
    }
}

window.addEventListener("scroll", animacionTituloGoku);


function animacionTituloVegeta() {
    let reveals = document.querySelector(".tituloVegeta");
    let titulo = document.querySelector(".tituloPersonajes");
    let windowHeight = window.innerHeight;
    let elementTop = titulo.getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
        reveals.classList.add("activeTituloVegeta");
    } else {
      reveals.classList.remove("activeTituloVegeta");
    }
}

window.addEventListener("scroll", animacionTituloVegeta);

function animacionCarrousel() {
  let reveals = document.querySelector(".personajes");
  //let bloque = document.querySelector(".tituloPersonajes");
  let windowHeight = window.innerHeight;
  let elementTop = reveals.getBoundingClientRect().top;
  let elementVisible = 150;
  if (elementTop < windowHeight - elementVisible) {
      reveals.classList.add("activeCarrousel");
  } else {
    reveals.classList.remove("activeCarrousel");
  }
}

window.addEventListener("scroll", animacionCarrousel);