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


var element = document.getElementById("hamburger-menu");

var myFunction = function() {
  var arrayOfElements=document.getElementsByClassName('navbar');
  let firstItem = arrayOfElements[0];
  
  if(firstItem.style.display == "flex"){
    firstItem.style.display = "none";
  }
  else{
    firstItem.style.display = "flex";
  }
};

element.addEventListener("click", myFunction);