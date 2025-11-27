// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    const scrollProgressBar = document.querySelector('.scroll-progress');
    if (scrollProgressBar) {
        scrollProgressBar.style.width = scrolled + '%';
    }
});

// Cursor Glow Effect
const cursorGlow = document.querySelector('.cursor-glow');
if (cursorGlow) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
        document.body.classList.add('cursor-active');
    });

    document.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-active');
    });
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Button click ripple effect
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const rect = this.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        this.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    });
});
