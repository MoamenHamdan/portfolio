// Contact Form Functionality and Validation
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