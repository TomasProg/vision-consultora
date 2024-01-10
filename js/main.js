let index = 0;
const container = document.querySelector(".slide");

setInterval(function() {
  index = (index + 1) % 3; // 3 es la cantidad de imágenes
  container.style.transform = "translateX(" + (-index * 100) + "%)";
}, 4000); // Cambia cada 4 segundos 

// ----------------------------Barra de navegacion con scroll-------------------------*/



/*-----------------------------Modal---------------------------------*/
// Obtener todas las cards y modales
const cards = document.querySelectorAll('.card');
const modals = document.querySelectorAll('.modal');

// Iterar sobre cada card y agregar el evento
cards.forEach((card, index) => {
  card.addEventListener('click', () => abrirModal(index + 1));
});

// Función para abrir la modal
function abrirModal(index) {
  const modal = document.getElementById(`modal${index}`);
  modal.style.display = 'block';
}

// Función para cerrar la modal
function cerrarModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

// Cierra el modal si el usuario hace clic fuera de él
window.addEventListener('click', function(event) {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
/*--------------------- Menu Nav Responsivo------------------------*/
let menuNav = document.querySelector('.nav');
let logoNav = document.querySelector('.logonav');
menuNav.onclick = function(){
  logoNav.classList.toggle('active')
}

/*-----------------------Formulario---------------------------------*/
const openFormBtn = document.querySelector('.contact');
let formulario = document.querySelector('.contenedor');

function toggleForm() {
  // Si el formulario está visible, lo oculta; si está oculto, lo muestra
  const estiloActual = getComputedStyle(formulario).display;
  
  if (estiloActual === 'flex') {
    formulario.style.display = 'none';
  } else {
    formulario.style.display = 'flex';
  }
}

openFormBtn.addEventListener('click', toggleForm);

/*--------------------Marcas con las que se trabaja---------------------------*/

document.addEventListener('DOMContentLoaded', function () {
  const banner = document.querySelector('.banner');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;
  const totalLogos = 16; // Cambia esto al total de logotipos que tengas

  prevBtn.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + totalLogos) % totalLogos;
    updateBanner();
  });

  nextBtn.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % totalLogos;
    updateBanner();
  });

  function updateBanner() {
    const translateValue = -currentIndex * (5 + 1.5); // 4cm de alto + 2cm de margen
    banner.style.transition = 'transform 0.5s ease-in-out';
    banner.style.transform = `translateX(${translateValue}cm)`;
  }

  // Agregamos un listener para el evento de transición
  banner.addEventListener('transitionend', function () {
    // Al finalizar la transición, comprobamos si estamos en el último logo y ajustamos el índice
    if (currentIndex === totalLogos - 1) {
      banner.style.transition = 'none'; // Eliminamos la transición para que el cambio sea instantáneo
      currentIndex = 0;
      const translateValue = -currentIndex * (5 + 1.5); 
      banner.style.transform = `translateX(${translateValue}cm)`;
      // Forzamos un repaint (repintado) para que la transición sin transición surta efecto
      banner.offsetHeight; // eslint-disable-line no-unused-expressions
      banner.style.transition = 'transform 0.5s ease-in-out';
    }
  });

  // Iniciamos el carrusel automáticamente
  setInterval(function () {
    currentIndex = (currentIndex + 1) % totalLogos;
    updateBanner();
  }, 2000); // Cambia 3000 a la duración deseada en milisegundos
});

