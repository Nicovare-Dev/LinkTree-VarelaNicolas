const botonMenu = document.getElementById('boton-menu');
const barra = document.getElementById('barra-navegacion');

let scrollAnterior = window.scrollY;

window.addEventListener('scroll', () => {
    const scrollActual = window.scrollY;

    if (scrollActual < scrollAnterior) {
        botonMenu.classList.remove('oculto');
    } else {
        botonMenu.classList.add('oculto');

        barra.classList.remove('barra-mostrada');
        barra.classList.add('barra-oculta');
    }

    scrollAnterior = scrollActual;
});

botonMenu.addEventListener('click', () => {
    barra.classList.toggle('barra-mostrada');
    barra.classList.toggle('barra-oculta');
});

