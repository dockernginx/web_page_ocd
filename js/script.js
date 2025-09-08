const images = [
    "img/fondo1.jpg",
    "img/fondo2.jpg",
    "img/fondo3.jpg",
    "img/fondo4.jpg",
    "img/fondo5.jpg",
    "img/fondo6.jpg",
    "img/fondo7.jpg",
    "img/fondo8.jpg",
    "img/fondo9.jpg",
    "img/fondo10.jpg"
];

const background = document.querySelector(".background");

// Escoge una imagen aleatoria al cargar/refrescar la página
function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * images.length);
    background.style.backgroundImage = `url(${images[randomIndex]})`;
}

setRandomBackground();
