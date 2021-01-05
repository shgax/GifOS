// Objects to interact with

let body = document.querySelector('body');
let changeMode = document.getElementById('changeMode');
let search = document.getElementById('inputSearch');
let searchIcon = document.getElementById('searchIcon');
let trendings = document.getElementById('trending');
let logoDesktop = document.getElementById('logoDesktop');
let logoMobile = document.getElementById('logoMobile');
let newGifo = document.getElementById('newGifo');
let slideRight = document.getElementById('slideRight');
let slideLeft = document.getElementById('slideLeft');

let host = "http://" + window.location.hostname + ":" + location.port;

function updateSrc(img, src) {
    img.src = host+src;
}

function toogleSrc(img, srcLight, srcDark) {
    if (img.src == host+srcLight){
        updateSrc(img, srcDark)
    } else {
        updateSrc(img, srcLight)
    }
}

function updateLogo() {
    toogleSrc(logoDesktop, "./assets/logo-desktop.svg", "./assets/logo-dark.svg")
    toogleSrc(logoMobilem, "./assets/logo-mobile.svg", "./assets/logo-mobiele-dark.svg")
}

function changeNewGifo() {
    toogleSrc(newGifo, "./assets/button-crear-gifo.svg", "./assets/CTA-crear-gifo-modo-noc.svg")
}

function changeSliders() {
    toogleSrc(slideRight, "./assets/Button-Slider-right.svg", "./assets/button-slider-right-md-noct.svg")
    toogleSrc(slideLeft, "./assets//button-slider-left.svg", "./assets/button-slider-left-md-noct.svg")
}

