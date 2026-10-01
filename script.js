// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", () => {
navLinks.classList.remove("active");
});

});


// ===============================
// SCROLL REVEAL
// ===============================

const elements = document.querySelectorAll(
".skill-card, .project-card, .timeline-item, .cert-card, .education-card"
);

const observer = new IntersectionObserver(
(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},
{
threshold: 0.12
}
);


elements.forEach((element) => {

element.style.opacity = "0";

element.style.transform = "translateY(25px)";

element.style.transition =
"opacity 0.6s ease, transform 0.6s ease";

observer.observe(element);

});


// ===============================
// ADD REVEAL STYLE
// ===============================

const style = document.createElement("style");

style.innerHTML = `

.skill-card.show,
.project-card.show,
.timeline-item.show,
.cert-card.show,
.education-card.show {

opacity: 1 !important;

transform: translateY(0) !important;

}

`;

document.head.appendChild(style);
