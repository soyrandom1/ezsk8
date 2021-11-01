// Carrusel
document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150
    });
});
// Efecto de Pagina
ScrollReveal().reveal('.Sup');
ScrollReveal().reveal('.nav-main');
ScrollReveal().reveal('.Armar_Skate', {delay: 500});
ScrollReveal().reveal('.Carrusel_Skate', {delay: 500});
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.card-full', {delay: 500});
ScrollReveal().reveal('.social', {delay: 500});
