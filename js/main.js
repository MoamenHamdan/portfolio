// Main JavaScript File - Imports all functionality

// Import all JavaScript modules
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
    initPageLoading();
    initHoverEffects();
    initScrollOptimization();
    
    // Add CSS for additional features
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
}); 