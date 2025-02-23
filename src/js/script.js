"use strict";  //rosali Johansson, Mittuniversitetet 2025-02-06


//code for mobile and tablet version, hamburgerbar show/hide
let openHamburgerEl = document.querySelector(".open-hamburger")
let closeHamburgerEl = document.querySelector(".close-hamburger")
let dogButtonEl = document.querySelector("#dogButton");
let dogDivEl = document.querySelector(".dogDiv")
 let hamburgerMenuEl = document.querySelector(".hamburgermenu")




if (dogButtonEl){
dogButtonEl.addEventListener("click", displayDogs)    
}

if (openHamburgerEl) {
openHamburgerEl.addEventListener("click", toggleMenu);
} 
if (closeHamburgerEl) {
closeHamburgerEl.addEventListener("click", toggleMenu)
}
function toggleMenu() {
   
    let style = window.getComputedStyle(hamburgerMenuEl)
    if (style.display === "none") {
        hamburgerMenuEl.style.display = "block";
    }
    else {
        hamburgerMenuEl.style.display = "none";
    }
}

function displayDogs() {
    dogButtonEl.style.display = "none";
    dogDivEl.style.display = "block";
}