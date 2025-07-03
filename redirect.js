// Simple redirect script for Moamen Hamdan's Portfolio
// Usage: Include this script in any HTML file to redirect to the new portfolio

(function() {
    'use strict';
    
    // Configuration
    const NEW_PORTFOLIO_URL = 'https://moamenhamdanportfolio.web.app/';
    const REDIRECT_DELAY = 3000; // 3 seconds delay
    
    // Show a brief message before redirecting
    function showRedirectMessage() {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
        `;
        
        // Create message box
        const messageBox = document.createElement('div');
        messageBox.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            max-width: 400px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        `;
        
        messageBox.innerHTML = `
            <h3 style="color: #333; margin-bottom: 15px;">Portfolio Moved!</h3>
            <p style="color: #666; margin-bottom: 20px; line-height: 1.5;">
                This portfolio has been moved to a new location with improved features and design.
            </p>
            <p style="color: #333; font-weight: bold; margin-bottom: 20px;">
                Redirecting in <span id="countdown">3</span> seconds...
            </p>
            <a href="${NEW_PORTFOLIO_URL}" 
               style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Go Now
            </a>
        `;
        
        overlay.appendChild(messageBox);
        document.body.appendChild(overlay);
        
        // Countdown
        let countdown = 3;
        const countdownElement = document.getElementById('countdown');
        
        const timer = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;
            
            if (countdown <= 0) {
                clearInterval(timer);
                window.location.href = NEW_PORTFOLIO_URL;
            }
        }, 1000);
    }
    
    // Check if we should redirect
    function shouldRedirect() {
        // Don't redirect if already on the new portfolio
        if (window.location.href.includes('moamenhamdanportfolio.web.app')) {
            return false;
        }
        
        // Don't redirect if user has dismissed the redirect
        if (localStorage.getItem('portfolio_redirect_dismissed')) {
            return false;
        }
        
        return true;
    }
    
    // Main redirect function
    function redirectToNewPortfolio() {
        if (shouldRedirect()) {
            showRedirectMessage();
        }
    }
    
    // Auto-redirect on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', redirectToNewPortfolio);
    } else {
        redirectToNewPortfolio();
    }
    
    // Export for manual use
    window.redirectToNewPortfolio = redirectToNewPortfolio;
    
})(); 