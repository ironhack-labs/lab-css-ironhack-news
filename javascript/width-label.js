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



var myFunction = function() {
  var element=document.getElementById('navbar-list');

  if(element.style.display == "flex"){
    element.style.display = "none";
  }
  else{
    element.style.display = "flex";
  }
};
document.getElementById("hamburger-menu").addEventListener("click", myFunction);