// Mode Sombre avec transition fluide
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        toggleButton.innerHTML = body.classList.contains('dark-mode') 
            ? '<i class="fas fa-sun"></i> Mode Clair' 
            : '<i class="fas fa-moon"></i> Mode Sombre';
    });
}

// Smooth Scroll pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation au défilement
const scrollElements = document.querySelectorAll('.scroll-animate');

const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= (window.innerHeight || document.documentElement.clientHeight));
};

const displayScrollElement = (element) => {
    element.classList.add('animated');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Effet de glow au survol des cartes
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});