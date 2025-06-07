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
const burger = document.querySelector('.burger-menu');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
  navbar.classList.toggle('show-menu');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 480) {
    // I will remove toggle class to show navbar fully properly on bigger screens
    navbar.classList.remove('show-menu');
  }
});
