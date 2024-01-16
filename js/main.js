// let index = 0;
// const container = document.querySelector(".slide");

// setInterval(function() {
//   index = (index + 1) % 3; // 3 es la cantidad de imágenes
//   container.style.transform = "translateX(" + (-index * 100) + "%)";
//   // Seleccionar los elementos de la imagen actual
//   const currentPropagandas = document.querySelector(".slide .image" + (index + 1) + " .propagandas");
//   const currentP = document.querySelector(".slide .image" + (index + 1) + " p");

//   // Aplicar el efecto de aparición gradual
//   setTimeout(() => {
//     currentPropagandas.style.opacity = 1;
//     currentP.style.opacity = 1;
//   }, 100); // Espera 100ms antes de aplicar la transición
// }, 4000); // Cambia cada 4 segundos 

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
let form2 = document.querySelector('.form2');

function toggleForm() {
  // Verifica si el ancho de la pantalla es menor o igual a 425px
  if (window.matchMedia('(max-width: 425px)').matches) {
    // Si es verdadero, muestra el formulario form2 y oculta el formulario principal
    form2.style.display = 'flex';
    formulario.style.display = 'none';
  } else {
    // Si es falso, muestra el formulario principal y oculta el formulario form2
    form2.style.display = 'none';
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
    const translateValue = -currentIndex * (5 + 2); // 4cm de alto + 2cm de margen
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
  }, 1500); // Cambia 3000 a la duración deseada en milisegundos
});



