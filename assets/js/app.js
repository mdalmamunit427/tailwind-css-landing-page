
//Show and hide hamburguer menu in small screens 
const menu = document.getElementById("menu");
const ulMenu = document.getElementById("ulMenu");

function menuToggle() {
    menu.classList.toggle('navbar-show')
}

// Browser resize listener
window.addEventListener("resize", menuResize);

// Rezise menu if user changing the width with responsive menu opened
function menuResize() {
    // first get the size from the window
    const window_size = window.innerWidth || document.body.clientWidth;
    if (window_size > 640) {
        menu.classList.remove('navbar-show');
    }
}
