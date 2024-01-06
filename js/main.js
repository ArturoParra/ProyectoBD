const fila = document.querySelector('.contenedor-carousel');
const fila1 = document.querySelector('.contenedor-carousel1');
const fila2 = document.querySelector('.contenedor-carousel2');
const fila3 = document.querySelector('.contenedor-carousel3');
const fila4 = document.querySelector('.contenedor-carousel4');
const hobbies = document.querySelectorAll('.hobbie');
const flechaizquierda = document.getElementById('flecha-izquierda');
const flechaderecha = document.getElementById('flecha-derecha');
const flechaizquierda1 = document.getElementById('flecha-izquierda1');
const flechaderecha1 = document.getElementById('flecha-derecha1');
const flechaizquierda2 = document.getElementById('flecha-izquierda2');
const flechaderecha2 = document.getElementById('flecha-derecha2');
const flechaizquierda3 = document.getElementById('flecha-izquierda3');
const flechaderecha3 = document.getElementById('flecha-derecha3');
const flechaizquierda4 = document.getElementById('flecha-izquierda4');
const flechaderecha4 = document.getElementById('flecha-derecha4');

//Carousel 
/* ---- ----- ----- Event listener para la flecha derecha ----- ----- ----- */
flechaderecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

/* ---- ----- ----- Event listener para la flecha izquierda ----- ----- ----- */
flechaizquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});


//Carousel 1
/* ---- ----- ----- Event listener para la flecha derecha ----- ----- ----- */
flechaderecha1.addEventListener('click', () => {
    fila1.scrollLeft += fila1.offsetWidth;
});

/* ---- ----- ----- Event listener para la flecha izquierda ----- ----- ----- */
flechaizquierda1.addEventListener('click', () => {
    fila1.scrollLeft -= fila1.offsetWidth;
});

//Carousel 2
/* ---- ----- ----- Event listener para la flecha derecha ----- ----- ----- */
flechaderecha2.addEventListener('click', () => {
    fila2.scrollLeft += fila2.offsetWidth;
});

/* ---- ----- ----- Event listener para la flecha izquierda ----- ----- ----- */
flechaizquierda2.addEventListener('click', () => {
    fila2.scrollLeft -= fila2.offsetWidth;
});

//Carousel 3
/* ---- ----- ----- Event listener para la flecha derecha ----- ----- ----- */
flechaderecha3.addEventListener('click', () => {
    fila3.scrollLeft += fila3.offsetWidth;
});

/* ---- ----- ----- Event listener para la flecha izquierda ----- ----- ----- */
flechaizquierda3.addEventListener('click', () => {
    fila3.scrollLeft -= fila3.offsetWidth;
});

//Carousel 4
/* ---- ----- ----- Event listener para la flecha derecha ----- ----- ----- */
flechaderecha4.addEventListener('click', () => {
    fila4.scrollLeft += fila4.offsetWidth;
});

/* ---- ----- ----- Event listener para la flecha izquierda ----- ----- ----- */
flechaizquierda4.addEventListener('click', () => {
    fila4.scrollLeft -= fila4.offsetWidth;
});



/* ---- ----- ----- Hover ----- ----- ----- */



hobbies.forEach((hobby) => {
    hobby.addEventListener('mouseenter', (e) => {
        const overlay = e.currentTarget.querySelector('.overlay');

        // Mostrar el overlay
        overlay.style.display = 'flex';

        setTimeout(() => {
            hobbies.forEach((h) => {
                const otherOverlay = h.querySelector('.overlay');
                if (otherOverlay !== overlay) {
                    otherOverlay.style.display = 'none'; // Ocultar otros overlays
                }
            });
        }, 300);
    });

    hobby.addEventListener('mouseleave', (e) => {
        const overlay = e.currentTarget.querySelector('.overlay');

        // Restaurar el estado original al salir del hover
        overlay.style.display = 'none';
    });
});

function abrirPopup () {
    document.getElementById("popup-1").classList.toggle("active");
}

function abrirPopupinf () {
    document.getElementById("popup-info").classList.toggle("active");
}
