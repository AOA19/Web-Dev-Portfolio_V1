const navLink = document.querySelectorAll(".nav-link");
const navBar = document.getElementById("navbarNav");
const navToggler = document.querySelector(".navbar-toggler");


// Close navbar when link is clicked
navLink.forEach((link) => link.addEventListener("click", closeNav));
function closeNav() {
    navBar.classList.remove("show");
    navToggler.classList.toggle("collapsed");
}
