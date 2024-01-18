
const sections = document.querySelectorAll('.resume-section');
const container = document.querySelector('.scroll-container');
let currentSectionIndex = 0;
let isScrolling = false;

// debugger
const navs = document.querySelectorAll('.nav-item');
navs.forEach((nav, index) => {
    nav.addEventListener('click', () => {
        currentSectionIndex = index;
    });
});

container.addEventListener('wheel', (event) => {
    event.preventDefault();

    if (isScrolling) return;

    isScrolling = true;
    setTimeout(() => {
        isScrolling = false;
    }, 500);

    const direction = event.deltaY > 0 ? 1 : -1;
    currentSectionIndex += direction;

    if (currentSectionIndex < 0) {
        currentSectionIndex = 0;
    } else if (currentSectionIndex >= sections.length) {
        currentSectionIndex = sections.length - 1;
    }

    const targetSection = sections[currentSectionIndex];
    targetSection.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});
