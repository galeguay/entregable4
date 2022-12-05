//SECCION HISTORIA
let faders = document.querySelectorAll(".fade-in");
let sliders = document.querySelectorAll(".slide-in");
let slidersUp = document.querySelectorAll(".slide-up");

let historytext1 = document.querySelector("#history-text-1");
let historytext2 = document.querySelector("#history-text-2");
let historytext3 = document.querySelector("#history-text-3");

let historyCard1 = document.querySelector("#history-card-1");
let historyCard2 = document.querySelector("#history-card-2");
let historyCard3 = document.querySelector("#history-card-3");

let trailer = document.querySelector("#feature");
let historyImg1 = document.querySelector("#history-img-1");
let historyImg3 = document.querySelector("#history-img-3");
let historyParagraph1 = document.querySelector("#history-paragraph-1");
let historyParagraph3 = document.querySelector("#history-paragraph-3");

let containerCharacters = document.querySelectorAll(
  "article.characters .container-characters"
);
let characters = document.querySelectorAll("article.characters ul");

window.addEventListener("scroll", scrollAppear);

function scrollAppear() {
  faders.forEach((fader) => {
    let top = fader.getBoundingClientRect().top;
    let bottom = fader.getBoundingClientRect().bottom;
    let scroll = window.innerHeight - window.innerHeight / 2;
    if (top < scroll) {
      fader.classList.add("appear");
    } else {
      fader.classList.remove("appear");
    }
  });

  sliders.forEach((slider) => {
    let top = slider.getBoundingClientRect().top;
    let bottom = slider.getBoundingClientRect().bottom;
    let scroll = window.innerHeight;
    if (top >= 0 && bottom <= scroll) {
      slider.classList.add("appear");
    }
  });

  let position = window.innerHeight - window.innerHeight / 2;
  let topPosition = historytext1.getBoundingClientRect().top;
  let topPosition1 = historytext2.getBoundingClientRect().top;
  let topPosition2 = historytext3.getBoundingClientRect().top;
  let topTrailer = trailer.getBoundingClientRect().top;

  if (topPosition < position) {
    historyCard1.classList.add("showContent");
    console.log("HISTORY 1");
    historytext1.classList.remove("fade-in");
    if (historyCard2.classList.contains("showContent")) {
      historyCard2.classList.remove("showContent");
      historytext2.classList.add("fade-in");
    }
  } else {
    historyImg1.classList.remove("appear");
    historyParagraph1.classList.remove("appear");
  }

  if (topPosition1 < position) {
    historyCard1.classList.remove("showContent");
    historytext1.classList.add("fade-in");
    historyCard2.classList.add("showContent");
    console.log("HISTORY 2");
    historytext2.classList.remove("fade-in");
    if (historyCard3.classList.contains("showContent")) {
      historyCard3.classList.remove("showContent");
      historytext3.classList.add("fade-in");
    }
  }

  if (topPosition2 < position) {
    historyCard2.classList.remove("showContent");
    historytext2.classList.add("fade-in");
    historyCard3.classList.add("showContent");
    console.log("HISTORY 3");
    historytext3.classList.remove("fade-in");
  }

  if (topTrailer < position) {
    historyImg3.classList.remove("appear");
    historyParagraph3.classList.remove("appear");
  }

  slidersUp.forEach((slider) => {
    let top = slider.getBoundingClientRect().top;
    let scroll = window.innerHeight;
    if (top < scroll) {
      slider.classList.add("appear");
    }
  });
}