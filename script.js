const navLinks = document.querySelectorAll(".navlist a");
const sections = document.querySelectorAll("section");

/* SMOOTH SCROLL */

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});

/* ACTIVE NAV LINK ON SCROLL */

window.addEventListener("scroll", () => {

    let current = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === `#${current}`){

            link.classList.add("active");

        }

    });

});

/* NAVBAR SCROLL EFFECT */

const navbar = document.querySelector(".navlist");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("nav-scrolled");

    }
    else{

        navbar.classList.remove("nav-scrolled");

    }

});

const form = document.getElementById("contactForm");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.email.value.trim();

    if (!email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)) {
        alert("Please enter a valid Gmail address!");
        return;
    }

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: "application/json"
        }
    });

    if (response.ok) {
        alert("Message Sent Successfully!");
        form.reset();
    } else {
        alert("Message not sent!");
    }
});