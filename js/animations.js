// Scroll Effects and Animations
function initScrollEffects() {
    // Smooth reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.services-box, .portfolio-box, .about-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Image loading with fade-in effect
function initImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
            
            img.addEventListener('error', () => {
                img.style.display = 'none';
            });
        }
    });
}

// Enhanced typing animation
function initTypingAnimation() {
    const typedElement = document.querySelector('.multiple-text');
    if (!typedElement) return;
    
    // Clear any existing content
    typedElement.textContent = '';
    
    const strings = ['Bug Hunter', 'Back-End Developer', 'Semicolon Ambassador', 'Cybersecurity Enthusiast'];
    
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentString = strings[stringIndex];
        
        if (isDeleting) {
            typedElement.textContent = currentString.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedElement.textContent = currentString.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentString.length) {
            typingSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            stringIndex = (stringIndex + 1) % strings.length;
            typingSpeed = 500; // Pause before next word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing after a short delay
    setTimeout(type, 1000);
}

// ScrollReveal animations
function initScrollReveal() {
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            distance: '60px',
            duration: 2500,
            delay: 400
        });

        sr.reveal('.home-content', { origin: 'top' });
        sr.reveal('.home-img', { origin: 'bottom' });
        sr.reveal('.about-img', { origin: 'left' });
        sr.reveal('.about-content', { origin: 'right' });
        sr.reveal('.services-box', { origin: 'top', interval: 200 });
        sr.reveal('.portfolio-box', { origin: 'bottom', interval: 200 });
        sr.reveal('.contact form', { origin: 'top' });
    }
} 