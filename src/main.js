import './style.css'

/******************* TOGGLE BUTTON ***********************/
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
    // document.body.classList.toggle("overflow-hidden");
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("left-[0]");
        hamburger.classList.remove("ri-close-large-line");
    })
})


/***********************  SHOW SCROLL UP ***************************/ 
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up")

    if(window.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    } else {
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")
    }
}

window.addEventListener("scroll", scrollUp)


/********************************** CHANGE BACKGROUND HEADER *********************************/ 
const scrollHeader = () => {
    const header = document.getElementById("navbar")

    if(window.scrollY >= 250) {
        header.classList.add("bg-white/50")
    } else {
        header.classList.remove("bg-white/50")
    }
}

window.addEventListener("scroll", scrollHeader)


/******************* SWIPER JS ******************/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
        loop: true,
    

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
});

/*********** SCROLL SECTION ACTIVE LINK ***********/ 
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "home"

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if(window.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id")
        }
    })

    navLinks.forEach(item => {
        item.classList.remove("active")

        if(item.href.includes(current)) {
            item.classList.add("active")
        }
    })
}

window.addEventListener("scroll", activeLink)

/************** SCROLL REVEAL **************/ 
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true
})



sr.reveal('.home__data, .choice__image, .food__data, .footer__content, .copyright-content, .footer-icon, .testimony-data')
sr.reveal('.home__image', {delay: 500, scale: 0.5})

sr.reveal('.services__card, .food-content',{interval: 100})
sr.reveal('.choice__data, .testimony-image', {delay: 100, interval: 100, origin: "left"})