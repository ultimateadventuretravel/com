// ===========================
// Ultimate Adventure Travel
// Main JavaScript
// ===========================

// Current Year
const footerYear = document.getElementById("year");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});
// ===========================
// Back To Top
// ===========================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ================= HERO SLIDER =================

const hero = document.querySelector(".hero");

const heroWelcome = document.getElementById("heroWelcome");
const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");
const heroDescription = document.getElementById("heroDescription");

const heroSlides = [

{
    image:"images/hero/hero1.jpg",
    welcome:"Welcome to Australia's Trusted Travel Partner",
    title:"Ultimate Adventure Travel Pty Ltd",
    subtitle:"Your Gateway to Unforgettable Adventures",
    description:"Discover Australia's most breathtaking destinations with our holiday packages, flights, hotels, visa assistance and more."
},

{
    image:"images/hero/hero2.jpg",
    welcome:"Experience Sydney",
    title:"Visit the Iconic Opera House",
    subtitle:"Discover Australia's Most Famous City",
    description:"Explore Sydney Harbour, Bondi Beach, world-class restaurants and unforgettable attractions."
},

{
    image:"images/hero/hero3.jpg",
    welcome:"Explore Melbourne",
    title:"Australia's Cultural Capital",
    subtitle:"Coffee • Arts • Shopping • Events",
    description:"Enjoy Melbourne's famous cafés, festivals, museums and exciting nightlife."
},

{
    image:"images/hero/hero4.jpg",
    welcome:"Relax on the Gold Coast",
    title:"Sun, Sand & Adventure",
    subtitle:"Beautiful Beaches & Theme Parks",
    description:"Experience golden beaches, thrilling theme parks and unforgettable family holidays."
},

{
    image:"images/hero/hero5.jpg",
    welcome:"Your Adventure Starts Here",
    title:"Travel Australia With Confidence",
    subtitle:"Flights • Tours • Hotels • Visa Assistance",
    description:"Let Ultimate Adventure Travel make your Australian dream holiday become reality."
}

];

let currentHero = 0;

function changeHero(){

    hero.classList.add("fade-out");

    setTimeout(() => {

        currentHero++;

        if(currentHero >= heroSlides.length){

            currentHero = 0;

        }

        hero.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)),
        url('${heroSlides[currentHero].image}')`;

        heroWelcome.textContent = heroSlides[currentHero].welcome;
        heroTitle.textContent = heroSlides[currentHero].title;
        heroSubtitle.textContent = heroSlides[currentHero].subtitle;
        heroDescription.textContent = heroSlides[currentHero].description;

        hero.classList.remove("fade-out");

    }, 400);

}

setInterval(changeHero,5000);

// ================= STICKY HEADER =================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#083D77";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(8,61,119,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    }

});
// ===========================
// ANIMATED COUNTERS
// ===========================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;

    const sectionTop = statsSection.getBoundingClientRect().top;

    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = Math.ceil(target / 150);

            function updateCounter() {

                current += increment;

                if (current >= target) {

                    counter.innerText = target.toLocaleString();

                    return;

                }

                counter.innerText = current.toLocaleString();

                requestAnimationFrame(updateCounter);

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);

window.addEventListener("load", startCounters);
// ================= FAQ ACCORDION =================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector("h3");

    question.addEventListener("click", () => {

        // Close all other FAQ items
        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        // Toggle current item
        item.classList.toggle("active");

    });

});
// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".featured-tours, .services, .destinations, .why-us, .stats, .booking, .employment, .testimonials, .faq, .newsletter"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("fade-in");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
console.log("script.js loaded");
// ===========================
// SCROLL REVEAL
// ===========================

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const top = section.getBoundingClientRect().top;

        const visible = 120;

        if(top < windowHeight - visible){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);

// ===========================
// ACTIVE PAGE
// ===========================

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link=>{

    if(link.getAttribute("href") === currentPage){

        link.classList.add("active");

    }

});
// ===========================
// DESTINATION SLIDER
// ===========================

const track = document.querySelector(".destination-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (track && nextBtn && prevBtn) {

    const cards = document.querySelectorAll(".destination-card");

    let index = 0;

    function slideCards() {

        const cardWidth = cards[0].offsetWidth + 30;

        track.style.transform = `translateX(-${index * cardWidth}px)`;

    }

    nextBtn.addEventListener("click", () => {

        if (index < cards.length - 3) {

            index++;

        } else {

            index = 0;

        }

        slideCards();

    });

    prevBtn.addEventListener("click", () => {

        if (index > 0) {

            index--;

        } else {

            index = cards.length - 3;

        }

        slideCards();

    });

    window.addEventListener("resize", slideCards);

}
// ===========================
// AUTO DESTINATION SLIDER
// ===========================

if (track && nextBtn) {

    setInterval(() => {

        nextBtn.click();

    }, 5000);

}
// ===========================
// TESTIMONIAL CAROUSEL
// ===========================

const testimonials = document.querySelectorAll(".testimonial-card");

if (testimonials.length > 0) {

    let currentTestimonial = 0;

    function showTestimonial(index) {

        testimonials.forEach(card => {

            card.classList.remove("active");

        });

        testimonials[index].classList.add("active");

    }

    showTestimonial(currentTestimonial);

    setInterval(() => {

        currentTestimonial++;

        if (currentTestimonial >= testimonials.length) {

            currentTestimonial = 0;

        }

        showTestimonial(currentTestimonial);

    }, 5000);

}
// ===========================
// LOADER
// ===========================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hidden");

        }, 1800);

    }

});
// ===========================
// HERO SEARCH
// ===========================

const heroSearchBtn = document.getElementById("heroSearchBtn");

if(heroSearchBtn){

    heroSearchBtn.addEventListener("click", () => {

        const destination =
            document.getElementById("heroDestination").value;

        const service =
            document.getElementById("heroService").value;

        const bookingSection =
            document.getElementById("booking");

        if(bookingSection){

            bookingSection.scrollIntoView({

                behavior:"smooth"

            });

        }

        const destinationSelect =
            document.querySelector('#booking select:nth-of-type(2)');

        const serviceSelect =
            document.querySelector('#booking select:nth-of-type(1)');

        if(destinationSelect && destination){

            destinationSelect.value = destination;

        }

        if(serviceSelect && service){

            serviceSelect.value = service;

        }

    });

}