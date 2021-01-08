//selectors
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

//Event Listeners
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
})
searchButton.addEventListener('click',findjournal);

//Functions
