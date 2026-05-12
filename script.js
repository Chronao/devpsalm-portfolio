const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll(){
    revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* MOBILE MENU */

const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    if(navMenu.classList.contains('show')){
        menuBtn.textContent = '✕';
    }else{
        menuBtn.textContent = '☰';
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        menuBtn.textContent = '☰';
    });
});

/* ACTIVE NAVBAR HIGHLIGHT */

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight){
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');

        if(link.getAttribute('href') === `#${current}`){
            link.classList.add('active');
        }
    });
});