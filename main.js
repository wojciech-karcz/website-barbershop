// hamburger
const hamburgerButton = document.querySelector(".hamburgerButton");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
hamburgerButton.addEventListener("click", () => {
    if (hamburgerMenu.style.display == "none"){
        hamburgerMenu.style.display = "grid";
        hamburgerButton.style.backgroundImage = "url('images/hamburger_open.png')"
    } else {
        hamburgerMenu.style.display = "none";
        hamburgerButton.style.backgroundImage = "url('images/hamburger_closed.png')"   
    }
})

const hamburgerLinks = document.querySelectorAll(".hamburgerLink");
hamburgerLinks.forEach((element) => {
    element.addEventListener("click", () => {
        hamburgerMenu.style.display = "none";
        hamburgerButton.style.backgroundImage = "url('images/hamburger_closed.png')"   
    })
})

// animations
const toAnimate = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, #logo, .hamburgerButton");
toAnimate.forEach((element) => {
    element.setAttribute("data-aos","fade-down");
    element.setAttribute("data-aos-delay","150");
})