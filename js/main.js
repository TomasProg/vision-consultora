let index = 0;
const container = document.querySelector(".slide");

setInterval(function() {
  index = (index + 1) % 3; // 3 es la cantidad de imágenes
  container.style.transform = "translateX(" + (-index * 100) + "%)";
}, 3000); // Cambia cada 3 segundos (ajusta según tus necesidades)