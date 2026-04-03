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

//Iteracion 3 Activite

const deploy = document.querySelector('.menu-deploy');
const navbar = document.querySelector('.navbar');

  deploy.addEventListener('click', () => {
    navbar.classList.toggle('active')
  });
