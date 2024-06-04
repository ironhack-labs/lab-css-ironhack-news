// wait for DOM content loading
document.addEventListener("DOMContentLoaded", ()=> {

    const navBar = document.querySelector(".navbar");

    // listen for click on menu item, hide/display navbar
    document.getElementById("menu-icon").addEventListener("click", ()=> {
        if (window.getComputedStyle(navBar).display === "none") {
            navBar.style.display = "flex";
        }
        else {
            navBar.style.display = "none";
        }
    })
});