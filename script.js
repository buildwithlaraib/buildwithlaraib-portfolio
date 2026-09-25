const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-menu");

});


// Close mobile menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-menu");
    });

});
// FAQ Section
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;
        const icon = question.querySelector("i");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
        } else {
            answer.style.display = "block";
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
        }

    });
});