// =========================
// Typing Effect
// =========================

const text = "Frontend Developer";
let index = 0;
const typing = document.querySelector(".hero h2");
function typeEffect(){
    if(index < text.length){
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect,100);
    }
}
typing.innerHTML = "";
typeEffect();
// =========================
// Navbar Scroll Effect
// =========================

const navbar = document.querySelector(".navbar");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 50){
        navbar.style.background = "rgba(11,17,32,0.95)";
}
else{
    navbar.style.background = "rgba(11,17,32,0.75)";
}
});
// =========================
// Close Mobile Menu
// =========================
const navLinks = document.querySelectorAll(".nav-link");

const menu = document.querySelector(".navbar-collapse");
navLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        if(menu.classList.contains("show")){
            document.querySelector(".navbar-toggler").click();
        }
    });
});



// =========================
// Footer Year
// =========================

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright p");


if(copyright){

    copyright.innerHTML =
    `© ${year} Laraib Mukhtar. All Rights Reserved.`;

}