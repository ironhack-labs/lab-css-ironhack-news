// Get the element that will display the viewport width
const viewportDimensions = document.querySelector(".viewport-dimensions");
// Get the viewport width
const width = window.innerWidth;
// Set the text of the element to show the viewport width
viewportDimensions.innerHTML = `Viewport Width: <b>${width}px</b>`;

window.addEventListener("resize", () => {
  // Get the viewport width
  const width = window.innerWidth;
  // Set the text of the element to show the viewport width
  viewportDimensions.innerHTML = `Viewport Width: <b>${width}px</b>`;
});



// GOOGLE DID THIS | TEST! 
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

// Adiciona um evento de clique no botão do menu
menuIcon.addEventListener('click', () => {
  // Alterna a classe 'show' na navbar
  navbar.classList.toggle('show');
});