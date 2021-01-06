//selectors
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");

//Event Listeners
searchButton.addEventListener("click", findjournal);

//Functions

function findjournal(event){
    //just going to another page for now 
    //event.preventDefault();
    const searchbar = document.getElementsByClassName("head");
    searchbar.remove();
}
