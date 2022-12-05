"use strict"

let header2 = document.getElementById("header2");
let logo = document.querySelector(".logo");
//let fotoPerfil = document.querySelector(".imagenPerfil");
window.onscroll = function() {myFunction()};


let sticky = header2.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header2.classList.add("sticky");
    header2.classList.add("headerChico");
    //logo.classList.add("logo2");
    logo.classList.add("logoSticky");
    //fotoPerfil.classList.add("logoPerfilSticky");
  } else {
    header2.classList.remove("sticky");
    //logo.classList.remove("logo2");
    header2.classList.remove("headerChico");
    logo.classList.remove("logoSticky");
    console.log("Sticky remove");
  }
}