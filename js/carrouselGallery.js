const buttons = document.querySelectorAll("[data-carrousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carrouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carrousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

/*cuando se scrollea salta esta function que va comprobando si la ventana llego a la posicion de cada carusel,
de ser asi, se agrega la classList "rise" que hace la animacion de pasar de opacidad 0 a 1 y de venir de abajo
hacia arriba*/

function castRiseCarrousels() {
  let triggerBottom = (window.innerHeight / 5) * 4;
  let sectionA = document.getElementsByClassName("slider-wrap");

  for (a of sectionA) {
    let top = a.getBoundingClientRect().top;
    if (top < triggerBottom) {
      a.classList.add("rise");
    }
  }
}