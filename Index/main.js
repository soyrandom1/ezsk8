// Carrusel
document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 100
    });
});
// Efecto de Pagina
ScrollReveal().reveal('.Sup', {delay: 100});
ScrollReveal().reveal('.nav-main', {delay: 300});
ScrollReveal().reveal('.carousel', {delay: 1000});
ScrollReveal().reveal('.Armar_Skate', {delay: 500});
ScrollReveal().reveal('.Carrusel_Skate', {delay: 500});
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.card-full', {delay: 500});
ScrollReveal().reveal('.social', {delay: 500});
