//selectors
const searchInput = document.querySelector(".search-input");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

//Event Listeners
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
})

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove("open")
    })
})

//Functions
