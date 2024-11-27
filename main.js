
// Animation on Scroll
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        heroSection.classList.add('animate');
    } else {
        heroSection.classList.remove('animate');
    }
});

// Button Hover Effect
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

