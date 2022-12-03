"use strict"

let open = document.querySelector(".hamburger");
let inner = document.querySelector(".hamburger-inner");
let hide = document.querySelector("#contenido");
let a1 = document.querySelector(".contenido1");
let a2 = document.querySelector(".contenido2");
let a3 = document.querySelector(".contenido3");
let a4 = document.querySelector(".contenido4");
let a5 = document.querySelector(".contenido5");
let a6 = document.querySelector(".contenido6");

window.addEventListener('load', function () {
    open.classList.toggle('.open');
})


open.addEventListener('click', function() {
    open.classList.toggle("open");
    inner.classList.remove("hamburguer-inner");
    setTimeout(function(){
        hide.classList.toggle('hide');
    }, 100);
    setTimeout(function(){
        a1.classList.add("translateContenido");
    }, 200);
    setTimeout(function(){
        a2.classList.add("translateContenido");
    }, 500);
    setTimeout(function(){
        a3.classList.add("translateContenido");
    }, 1000);
    setTimeout(function(){
        a4.classList.add("translateContenido");
    }, 1300);
    setTimeout(function(){
        a5.classList.add("translateContenido");
    }, 1600);
    setTimeout(function(){
        a6.classList.add("translateContenido");
    }, 1900);
    a1.classList.remove("translateContenido");
    a2.classList.remove("translateContenido");
    a3.classList.remove("translateContenido");
    a4.classList.remove("translateContenido");
    a5.classList.remove("translateContenido");
    a6.classList.remove("translateContenido");
});

