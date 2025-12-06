// Sticky Navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section-title, .service-box, .property-card, .agent-card').forEach(el => {
    el.style.opacity = '0';
    el.classList.add('animate-up'); // Re-using the class but controlling trigger
    // Actually, let's just add a class that triggers the animation defined in CSS
    // But wait, the CSS 'animate-up' runs immediately on load for hero.
    // Let's modify the approach slightly for scroll elements.
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// Fix for the observer to play animation
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.style.opacity = '1';
            scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section-title, .service-box, .property-card, .agent-card, .contact-form').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.animation = 'fadeInUp 0.8s forwards paused';
    scrollObserver.observe(el);
});

// Close mobile menu on click
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});
