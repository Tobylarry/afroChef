let gallery = document.querySelector('#gallery')
let galleryContent = document.querySelector('.gallery')
let home = document.querySelector('#home')
let homeContent = document.querySelector('.homeContent')
let header = document.querySelector('.header')
let container = document.querySelector('.container')
let menu = document.querySelector('#menu')
let menuContent = document.querySelector('.menu')
let more = document.querySelector('.more')
let topp = document.querySelector('#top')


gallery.addEventListener('click', function() {
    galleryContent.style.display = "block"
    homeContent.style.display = "none"
    menuContent.style.display = "none"

})

home.addEventListener('click', function() {
    homeContent.style.display = "block"
    galleryContent.style.display = "block"
})

menu.addEventListener('click', function() {
    menuContent.style.display = "block"
    homeContent.style.display = "none"
    galleryContent.style.display = "none"
    more.style.display = "block"
    topp.style.display = "none"

})