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

// toggle menu
const brgrBtn = document.getElementById('brgr');
const navbar = document.querySelector('.navbar');

brgrBtn.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
});

// remove hidden when screen is bigger than 480px
window.addEventListener('resize', () => {
  if (window.innerWidth > 480){
    navbar.classList.remove('hidden');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 480){
    navbar.classList.add('hidden');
  }
});