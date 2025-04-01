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

var menu = document.getElementById("navigation");
var hamburgerMenu = document.getElementById("hamburger-menu");

function toggleMenu(event) {
  menu.classList.toggle("show-menu");
}

hamburgerMenu.addEventListener("click", toggleMenu);

