
/* =========================================
KURIFTU PREMIUM WEBSITE
INTERACTIONS
========================================= */

/* =========================================
PRELOADER
========================================= */

window.addEventListener("load", () => {

const preloader = document.getElementById("preloader");

setTimeout(() => {
preloader.classList.add("hide");
}, 900);

});

/* =========================================
NAVBAR
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

if (window.scrollY > 70) {
navbar.classList.add("scrolled");
} else {
navbar.classList.remove("scrolled");
}

});

/* =========================================
MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

mobileMenu.classList.toggle("open");

document.body.classList.toggle("lock");

});

document.querySelectorAll(".mobile-menu a").forEach(link => {

link.addEventListener("click", () => {

mobileMenu.classList.remove("open");

document.body.classList.remove("lock");

});

});

/* =========================================
HERO SLIDESHOW
========================================= */

const heroSlides = document.querySelectorAll(".hero-slide");
const slideNumber = document.getElementById("slideNumber");
const heroProgress = document.querySelector(".hero-progress span");

let currentSlide = 0;

function showHeroSlide(index) {

heroSlides.forEach(slide => {
slide.classList.remove("active");
});

heroSlides[index].classList.add("active");

slideNumber.textContent =
String(index + 1).padStart(2, "0");

heroProgress.style.width =
"${((index + 1) / heroSlides.length) * 100}%";

}

function nextHeroSlide() {

currentSlide++;

if (currentSlide >= heroSlides.length) {
currentSlide = 0;
}

showHeroSlide(currentSlide);

}

/* Automatic hero slideshow */

setInterval(nextHeroSlide, 6000);

/* =========================================
SCROLL REVEAL
========================================= */

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver(
entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

      revealObserver.unobserve(entry.target);

    }

  });

},
{
  threshold: 0.12
}

);

revealElements.forEach(element => {

revealObserver.observe(element);

});

/* =========================================
REVIEWS
========================================= */

const reviews =
document.querySelectorAll(".review");

const reviewDots =
document.querySelectorAll(".review-dot");

const previousReview =
document.getElementById("previousReview");

const nextReview =
document.getElementById("nextReview");

let currentReview = 0;

function showReview(index) {

reviews.forEach(review => {
review.classList.remove("active");
});

reviewDots.forEach(dot => {
dot.classList.remove("active");
});

reviews[index].classList.add("active");

reviewDots[index].classList.add("active");

currentReview = index;

}

nextReview.addEventListener("click", () => {

currentReview++;

if (currentReview >= reviews.length) {
currentReview = 0;
}

showReview(currentReview);

});

previousReview.addEventListener("click", () => {

currentReview--;

if (currentReview < 0) {
currentReview = reviews.length - 1;
}

showReview(currentReview);

});

reviewDots.forEach((dot, index) => {

dot.addEventListener("click", () => {

showReview(index);

});

});

/* Automatic review rotation */

setInterval(() => {

currentReview++;

if (currentReview >= reviews.length) {
currentReview = 0;
}

showReview(currentReview);

}, 7000);

/* =========================================
GALLERY LIGHTBOX
========================================= */

const galleryItems =
document.querySelectorAll(".gallery-item");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const closeLightbox =
document.getElementById("closeLightbox");

galleryItems.forEach(item => {

item.addEventListener("click", () => {

const image =
  item.getAttribute("data-image");

lightboxImage.src = image;

lightbox.classList.add("open");

document.body.classList.add("lock");

});

});

closeLightbox.addEventListener("click", () => {

lightbox.classList.remove("open");

document.body.classList.remove("lock");

});

lightbox.addEventListener("click", event => {

if (event.target === lightbox) {

lightbox.classList.remove("open");

document.body.classList.remove("lock");

}

});

/* =========================================
ESCAPE KEY
========================================= */

document.addEventListener("keydown", event => {

if (event.key === "Escape") {

mobileMenu.classList.remove("open");

lightbox.classList.remove("open");

document.body.classList.remove("lock");

}

});

/* =========================================
BACK TO TOP
========================================= */

const backTop =
document.getElementById("backTop");

window.addEventListener("scroll", () => {

if (window.scrollY > 700) {

backTop.classList.add("show");

} else {

backTop.classList.remove("show");

}

});

backTop.addEventListener("click", () => {

window.scrollTo({
top: 0,
behavior: "smooth"
});

});

/* =========================================
IMAGE PARALLAX
========================================= */

window.addEventListener("scroll", () => {

const scrollPosition =
window.scrollY;

const hero =
document.querySelector(".hero");

if (hero) {

const heroSlides =
  document.querySelectorAll(".hero-slide");

heroSlides.forEach(slide => {

  if (slide.classList.contains("active")) {

    slide.style.transform =
      `scale(1) translateY(${scrollPosition * 0.08}px)`;

  }

});

}

});

/* =========================================
SMOOTH ANCHORS
========================================= */

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor => {

anchor.addEventListener("click", function(event) {

const targetID =
  this.getAttribute("href");

const target =
  document.querySelector(targetID);

if (!target) return;

event.preventDefault();

target.scrollIntoView({
  behavior: "smooth",
  block: "start"
});

});

});

/* =========================================
HERO KEYBOARD CONTROLS
========================================= */

document.addEventListener("keydown", event => {

if (event.key === "ArrowRight") {

nextHeroSlide();

}

});

document.addEventListener("keydown", event => {

if (event.key === "ArrowLeft") {

currentSlide--;

if (currentSlide < 0) {
  currentSlide = heroSlides.length - 1;
}

showHeroSlide(currentSlide);

}

});
