// Particles Background Configuration
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        // Main particles background (home section)
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
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
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
                        distance: 300,
                        duration: 0.6
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

        // Services particles background
        particlesJS("particles-services", {
            particles: {
                number: {
                    value: 40,
                    density: {
                        enable: true,
                        value_area: 1000
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
                    value: 0.2,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 2,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 30,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 120,
                    color: "#0ef",
                    opacity: 0.15,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
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
                        distance: 300,
                        line_linked: {
                            opacity: 0.8
                        }
                    },
                    bubble: {
                        distance: 300,
                        size: 25,
                        duration: 2,
                        opacity: 6,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.5
                    },
                    push: {
                        particles_nb: 3
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });

        // Contact particles background
        particlesJS("particles-contact", {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 900
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
                    value: 0.25,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 2.5,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 35,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 130,
                    color: "#0ef",
                    opacity: 0.18,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.8,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
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
                        distance: 350,
                        line_linked: {
                            opacity: 0.7
                        }
                    },
                    bubble: {
                        distance: 250,
                        size: 20,
                        duration: 2,
                        opacity: 7,
                        speed: 3
                    },
                    repulse: {
                        distance: 250,
                        duration: 0.5
                    },
                    push: {
                        particles_nb: 3
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

// Enhanced Particle Interactions with Mouse Avoidance
function initEnhancedParticleInteractions() {
    // Mouse trail effect for particles
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    let mouseTrailTimeout;
    let particleAvoidanceRadius = 100; // Radius where particles will avoid mouse

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        isMouseMoving = true;
        
        // Clear previous timeout
        clearTimeout(mouseTrailTimeout);
        
        // Set timeout to stop mouse movement effect
        mouseTrailTimeout = setTimeout(() => {
            isMouseMoving = false;
        }, 100);
        
        // Create particle trail effect
        createParticleTrail(e.clientX, e.clientY);
        
        // Create avoidance effect
        createMouseAvoidanceEffect(e.clientX, e.clientY);
    });

    // Click to create particles
    document.addEventListener('click', (e) => {
        // Don't create particles on interactive elements
        if (e.target.closest('.btn, .services-box, .portfolio-box, .navbar, .menu-icon, input, textarea')) {
            return;
        }
        
        createClickParticles(e.clientX, e.clientY);
    });

    // Create particle trail effect
    function createParticleTrail(x, y) {
        if (!isMouseMoving) return;
        
        const trailParticle = document.createElement('div');
        trailParticle.className = 'mouse-trail-particle';
        trailParticle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: #0ef;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.6;
            animation: trailFade 0.8s ease-out forwards;
        `;
        
        document.body.appendChild(trailParticle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (trailParticle.parentNode) {
                trailParticle.parentNode.removeChild(trailParticle);
            }
        }, 800);
    }

    // Create mouse avoidance effect
    function createMouseAvoidanceEffect(x, y) {
        // Create a ripple effect around the mouse
        const ripple = document.createElement('div');
        ripple.className = 'mouse-avoidance-ripple';
        ripple.style.cssText = `
            position: fixed;
            left: ${x - 50}px;
            top: ${y - 50}px;
            width: 100px;
            height: 100px;
            border: 2px solid rgba(14, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            animation: rippleExpand 0.5s ease-out forwards;
        `;
        
        document.body.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 500);
    }

    // Create click particles
    function createClickParticles(x, y) {
        for (let i = 0; i < 8; i++) {
            const clickParticle = document.createElement('div');
            clickParticle.className = 'click-particle';
            
            const angle = (i / 8) * Math.PI * 2;
            const distance = 30 + Math.random() * 20;
            const finalX = x + Math.cos(angle) * distance;
            const finalY = y + Math.sin(angle) * distance;
            
            clickParticle.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: 6px;
                height: 6px;
                background: #0ef;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                opacity: 0.8;
                animation: clickParticleAnim 1s ease-out forwards;
            `;
            
            document.body.appendChild(clickParticle);
            
            // Animate particle movement
            setTimeout(() => {
                clickParticle.style.transform = `translate(${finalX - x}px, ${finalY - y}px)`;
                clickParticle.style.opacity = '0';
            }, 50);
            
            // Remove particle after animation
            setTimeout(() => {
                if (clickParticle.parentNode) {
                    clickParticle.parentNode.removeChild(clickParticle);
                }
            }, 1000);
        }
    }

    // Create floating particles that avoid mouse
    function createFloatingAvoidanceParticles() {
        setInterval(() => {
            if (!isMouseMoving) return;
            
            // Create particles that float away from mouse
            for (let i = 0; i < 3; i++) {
                const avoidanceParticle = document.createElement('div');
                avoidanceParticle.className = 'avoidance-particle';
                
                // Calculate position away from mouse
                const angle = Math.random() * Math.PI * 2;
                const distance = particleAvoidanceRadius + Math.random() * 50;
                const startX = mouseX + Math.cos(angle) * distance;
                const startY = mouseY + Math.sin(angle) * distance;
                
                // Calculate end position (further away)
                const endX = startX + Math.cos(angle) * 100;
                const endY = startY + Math.sin(angle) * 100;
                
                avoidanceParticle.style.cssText = `
                    position: fixed;
                    left: ${startX}px;
                    top: ${startY}px;
                    width: 3px;
                    height: 3px;
                    background: #0ef;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9997;
                    opacity: 0.4;
                    animation: avoidanceFloat 2s ease-out forwards;
                `;
                
                document.body.appendChild(avoidanceParticle);
                
                // Animate movement away from mouse
                setTimeout(() => {
                    avoidanceParticle.style.transform = `translate(${endX - startX}px, ${endY - startY}px)`;
                    avoidanceParticle.style.opacity = '0';
                }, 100);
                
                // Remove particle after animation
                setTimeout(() => {
                    if (avoidanceParticle.parentNode) {
                        avoidanceParticle.parentNode.removeChild(avoidanceParticle);
                    }
                }, 2000);
            }
        }, 200); // Create new particles every 200ms when mouse is moving
    }

    // Start the floating avoidance particles
    createFloatingAvoidanceParticles();
}

// Add CSS animations for particle effects
function addParticleAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes trailFade {
            0% {
                opacity: 0.6;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0.5);
            }
        }
        
        @keyframes clickParticleAnim {
            0% {
                opacity: 0.8;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0.2);
            }
        }
        
        @keyframes rippleExpand {
            0% {
                transform: scale(0);
                opacity: 0.5;
            }
            100% {
                transform: scale(1);
                opacity: 0;
            }
        }
        
        @keyframes avoidanceFloat {
            0% {
                opacity: 0.4;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0.3);
            }
        }
        
        .mouse-trail-particle {
            box-shadow: 0 0 10px #0ef;
        }
        
        .click-particle {
            box-shadow: 0 0 15px #0ef;
        }
        
        .mouse-avoidance-ripple {
            box-shadow: 0 0 20px rgba(14, 255, 255, 0.2);
        }
        
        .avoidance-particle {
            box-shadow: 0 0 8px #0ef;
        }
    `;
    document.head.appendChild(style);
}

// Initialize enhanced interactions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addParticleAnimations();
    initEnhancedParticleInteractions();
}); 