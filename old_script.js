// Modern Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initImageLoading();
    initTypingAnimation();
    initParticles();
    initScrollReveal();
    initSmoothScrolling();
    initFormValidation();
    initPortfolioFilter();
    
    // Navigation functionality
    function initNavigation() {
        const menuIcon = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.navbar a');
        
        // Mobile menu toggle
        if (menuIcon) {
            menuIcon.onclick = () => {
                menuIcon.classList.toggle('bx-x');
                navbar.classList.toggle('active');
            };
        }
        
        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                if (menuIcon) menuIcon.classList.remove('bx-x');
            });
        });
        
        // Active navigation highlighting
        const sections = document.querySelectorAll('section');
        const header = document.querySelector('.header');
        
        window.addEventListener('scroll', () => {
            let current = '';
            const scrollY = window.pageYOffset;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                const sectionHeight = section.offsetHeight;
                
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
            
            // Header background on scroll
            if (scrollY > 100) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }
    
    // Scroll effects and animations
    function initScrollEffects() {
        // Parallax effect for background elements
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.home-img, .about-img');
            
            // parallaxElements.forEach(element => {
            //     const speed = 0.5;
            //     element.style.transform = `translateY(${scrolled * speed}px)`;
            // });
        });
        
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
    
    // Particles background
    function initParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS("particles-js", {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#0ef"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        }
                    },
                    opacity: {
                        value: 0.3,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#0ef",
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse"
                        },
                        onclick: {
                            enable: true,
                            mode: "push"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            });
        }
    }
    
    // ScrollReveal animations
    function initScrollReveal() {
        if (typeof ScrollReveal !== 'undefined') {
            const sr = ScrollReveal({
                reset: false,
                distance: '80px',
                duration: 2000,
                delay: 200,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });
            
            sr.reveal('.home-content, .heading', { 
                origin: 'top',
                interval: 200
            });
            sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { 
                origin: 'bottom',
                interval: 200
            });
            sr.reveal('.about-img', { 
                origin: 'left',
                delay: 400
            });
            sr.reveal('.about-content', { 
                origin: 'right',
                delay: 400
            });
        }
    }
    
    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Form validation and submission
    function initFormValidation() {
        const form = document.getElementById('contactForm');
        if (!form) return;
        
        const inputs = form.querySelectorAll('input, textarea');
        
        // Real-time validation
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    validateField(input);
                }
            });
            input.addEventListener('focus', () => {
                input.classList.add('focused');
            });
            input.addEventListener('blur', () => {
                input.classList.remove('focused');
            });
        });
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                // Create mailto link with form data
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const phone = document.getElementById('phone').value.trim();
                const subject = document.getElementById('subject').value.trim();
                const message = document.getElementById('message').value.trim();
                
                // Build email body
                let emailBody = `Name: ${name}\n`;
                emailBody += `Email: ${email}\n`;
                if (phone) {
                    emailBody += `Phone: ${phone}\n`;
                }
                emailBody += `\nMessage:\n${message}`;
                
                // Create mailto URL
                const mailtoUrl = `mailto:moumenhamdan5@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
                
                // Open email client
                window.location.href = mailtoUrl;
                
                // Show success message
                showNotification('Email client opened successfully!', 'success');
                
                // Reset form after a short delay
                setTimeout(() => {
                    form.reset();
                }, 1000);
            } else {
                showNotification('Please fill all required fields correctly.', 'error');
            }
        });
    }
    
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        
        // Remove existing error styles
        field.classList.remove('error');
        
        // Validation rules
        if (field.hasAttribute('required') && !value) {
            isValid = false;
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
            }
        } else if (field.type === 'number' && value) {
            if (isNaN(value) || value < 0) {
                isValid = false;
            }
        }
        
        if (!isValid) {
            field.classList.add('error');
        }
        
        return isValid;
    }
    
    function showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Performance optimization: Throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // Apply throttling to scroll events
    window.addEventListener('scroll', throttle(() => {
        // Scroll-based animations can go here
    }, 16)); // ~60fps
    
    // Add loading animation for page transitions
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.btn, .social-media a, .portfolio-box');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Portfolio Filtering Functionality
    function initPortfolioFilter() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-box');

        // Filter functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                // Filter portfolio items
                portfolioItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || category === filterValue) {
                        item.classList.remove('hidden');
                        item.classList.add('visible');
                    } else {
                        item.classList.add('hidden');
                        item.classList.remove('visible');
                    }
                });

                // Add smooth animation for grid layout changes
                const container = document.querySelector('.porfolio-container');
                container.style.transition = 'all 0.3s ease-in-out';
                
                // Trigger reflow to ensure smooth animation
                setTimeout(() => {
                    container.style.transition = '';
                }, 300);
            });
        });
    }
});

// Add CSS for new features
const additionalStyles = `
    .notification {
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    .error {
        border-color: #f44336 !important;
        box-shadow: 0 0 10px rgba(244, 67, 54, 0.3) !important;
    }
    
    .focused {
        transform: translateY(-5px);
    }
    
    body.loaded {
        opacity: 1;
        transition: opacity 0.5s ease;
    }
    
    body {
        opacity: 0;
    }
    
    .multiple-text {
        color: #0ef;
        font-weight: 600;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

