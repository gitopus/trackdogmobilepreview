// Visual Effects and Animations JavaScript

class TrackdogEffects {
    constructor() {
        this.init();
    }

    init() {
        this.createParticles();
        this.initializePageTransitions();
        this.initializeToastSystem();
        this.initializeLoadingSystem();
        this.enhanceButtons();
        this.initializeAccessibility();
    }

    // Particle Background System
    createParticles() {
        const container = document.createElement('div');
        container.className = 'particles-container';
        document.body.appendChild(container);

        setInterval(() => {
            if (container.children.length < 20) {
                this.createParticle(container);
            }
        }, 800);
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 15 + 15;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${Math.random() * 2}s`;

        container.appendChild(particle);

        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, duration * 1000 + 2000);
    }

    // Toast Notification System
    initializeToastSystem() {
        this.toastContainer = document.createElement('div');
        this.toastContainer.className = 'toast-container';
        document.body.appendChild(this.toastContainer);
    }

    showToast(title, message, type = 'info', duration = 4000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        const icons = {
            success: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#00aa44"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
            error: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#ff4444"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
            info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#764AF1"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
        };

        toast.innerHTML = `
            <div class="toast-icon">${icons[type]}</div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
            </button>
        `;

        this.toastContainer.appendChild(toast);

        // Show animation
        setTimeout(() => toast.classList.add('show'), 10);

        // Auto-dismiss
        const dismissTimer = setTimeout(() => this.dismissToast(toast), duration);

        // Manual dismiss
        toast.querySelector('.toast-close').addEventListener('click', () => {
            clearTimeout(dismissTimer);
            this.dismissToast(toast);
        });

        return toast;
    }

    dismissToast(toast) {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }

    // Loading System
    initializeLoadingSystem() {
        this.loadingOverlay = document.createElement('div');
        this.loadingOverlay.className = 'loading-overlay';
        this.loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
        document.body.appendChild(this.loadingOverlay);
    }

    showLoading() {
        this.loadingOverlay.classList.add('show');
    }

    hideLoading() {
        this.loadingOverlay.classList.remove('show');
    }

    // Page Transitions
    initializePageTransitions() {
        document.body.classList.add('page-transition');

        window.addEventListener('load', () => {
            setTimeout(() => {
                document.body.classList.add('loaded');
            }, 100);
        });
    }

    // Enhanced Buttons
    enhanceButtons() {
        const buttons = document.querySelectorAll('button, .login-btn, .signup-submit, .spotify-btn');
        buttons.forEach(button => {
            button.classList.add('enhanced-button', 'interactive-element');
        });
    }

    // Button Loading States
    setButtonLoading(button, isLoading) {
        if (isLoading) {
            button.classList.add('btn-loading');
            button.disabled = true;
        } else {
            button.classList.remove('btn-loading');
            button.disabled = false;
        }
    }

    // Social Button Loading
    setSocialButtonLoading(button, isLoading) {
        if (isLoading) {
            button.classList.add('social-btn-loading');
            button.disabled = true;
        } else {
            button.classList.remove('social-btn-loading');
            button.disabled = false;
        }
    }

    // Accessibility Features
    initializeAccessibility() {
        // High contrast mode detection
        if (window.matchMedia('(prefers-contrast: high)').matches) {
            document.body.classList.add('high-contrast');
        }

        // Reduced motion detection
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.classList.add('reduced-motion');
        }

        // Focus management
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('using-keyboard');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('using-keyboard');
        });
    }

    // Form Submission with Loading
    submitFormWithLoading(form, submitButton, onSuccess, onError) {
        const formData = new FormData(form);

        this.setButtonLoading(submitButton, true);

        // Simulate API call (replace with actual implementation)
        setTimeout(() => {
            this.setButtonLoading(submitButton, false);

            // Simulate random success/error for demo
            if (Math.random() > 0.3) {
                this.showToast('Success!', 'Your account has been created successfully.', 'success');
                if (onSuccess) onSuccess();
            } else {
                this.showToast('Error', 'Something went wrong. Please try again.', 'error');
                if (onError) onError();
            }
        }, 2000);
    }

    // Spotify Login Animation
    handleSpotifyLogin(button) {
        this.setSocialButtonLoading(button, true);

        setTimeout(() => {
            this.setSocialButtonLoading(button, false);
            this.showToast('Spotify Login', 'Connecting to Spotify...', 'info');

            // Simulate redirect
            setTimeout(() => {
                this.showToast('Success!', 'Connected to Spotify successfully!', 'success');
            }, 1500);
        }, 1500);
    }

    // Smooth Page Navigation
    navigateToPage(url, callback) {
        this.showLoading();

        setTimeout(() => {
            if (callback) {
                callback();
            } else {
                window.location.href = url;
            }
        }, 500);
    }

    // Theme switching functionality
    initializeThemeToggle() {
        // Check for saved theme or default to dark
        const savedTheme = localStorage.getItem('trackdog-theme') || 'dark';
        this.setTheme(savedTheme);

        // Add theme toggle button to header
        this.addThemeToggleButton();

        // Keyboard shortcut: Ctrl+Shift+T for theme toggle
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }

    addThemeToggleButton() {
        // Create theme toggle button
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.setAttribute('aria-label', 'Toggle theme');
        themeToggle.innerHTML = `
            <span class="theme-icon">
                <span class="sun">☀️</span>
                <span class="moon">🌙</span>
            </span>
        `;

        // Style the button
        Object.assign(themeToggle.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            zIndex: '1000',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        });

        themeToggle.addEventListener('click', () => this.toggleTheme());
        document.body.appendChild(themeToggle);

        // Update button appearance based on current theme
        this.updateThemeToggleButton(themeToggle);
        this.themeToggleButton = themeToggle;
    }

    updateThemeToggleButton(button = this.themeToggleButton) {
        if (!button) return;

        const currentTheme = document.documentElement.getAttribute('data-theme');
        const sun = button.querySelector('.sun');
        const moon = button.querySelector('.moon');

        if (currentTheme === 'light') {
            sun.style.display = 'none';
            moon.style.display = 'block';
        } else {
            sun.style.display = 'block';
            moon.style.display = 'none';
        }
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('trackdog-theme', theme);
        this.updateThemeToggleButton();
        this.showToast(`Switched to ${theme} theme`, 'info');
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    // Enhanced keyboard shortcuts
    initializeKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+K or Cmd+K for search focus
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.querySelector('.search-input, input[type="search"]');
                if (searchInput) {
                    searchInput.focus();
                    searchInput.select();
                    this.showToast('Search focused', 'info');
                }
            }

            // Escape to close modals/overlays
            if (e.key === 'Escape') {
                const modal = document.querySelector('.modal-overlay.show');
                if (modal) {
                    modal.classList.remove('show');
                }
            }

            // Tab navigation enhancement
            if (e.key === 'Tab') {
                const focusedElement = document.activeElement;
                if (focusedElement) {
                    focusedElement.style.outline = '2px solid #764AF1';
                }
            }

            // Alt+H for home navigation
            if (e.altKey && e.key === 'h') {
                e.preventDefault();
                this.navigateToPage('index.html');
            }

            // Alt+L for login navigation
            if (e.altKey && e.key === 'l') {
                e.preventDefault();
                this.navigateToPage('login.html');
            }

            // Alt+S for signup navigation
            if (e.altKey && e.key === 's') {
                e.preventDefault();
                this.navigateToPage('signup.html');
            }
        });

        // Remove focus outline when clicking
        document.addEventListener('mousedown', () => {
            document.addEventListener('mouseup', () => {
                if (document.activeElement) {
                    document.activeElement.style.outline = 'none';
                }
            }, { once: true });
        });
    }

    // Accessibility improvements
    initializeAccessibility() {
        // Add skip link
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';

        Object.assign(skipLink.style, {
            position: 'absolute',
            top: '-40px',
            left: '6px',
            background: '#764AF1',
            color: 'white',
            padding: '8px',
            borderRadius: '4px',
            textDecoration: 'none',
            zIndex: '100000',
            transition: 'top 0.3s ease'
        });

        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });

        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });

        document.body.insertBefore(skipLink, document.body.firstChild);

        // Ensure main content is identifiable
        const main = document.querySelector('main') ||
            document.querySelector('.container') ||
            document.querySelector('.main-content');
        if (main && !main.id) {
            main.id = 'main';
        }

        // Add focus indicators for better navigation
        const style = document.createElement('style');
        style.textContent = `
            .skip-link:focus {
                top: 6px;
            }
            
            button:focus,
            input:focus,
            select:focus,
            textarea:focus,
            a:focus {
                outline: 2px solid #764AF1 !important;
                outline-offset: 2px;
            }
            
            .theme-toggle:focus {
                outline: 2px solid #764AF1;
                outline-offset: 2px;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.trackdogEffects = new TrackdogEffects();

    // Initialize all interactive features
    window.trackdogEffects.initializeThemeToggle();
    window.trackdogEffects.initializeKeyboardShortcuts();
    window.trackdogEffects.initializeAccessibility();
});

// Expose global functions for easy use
window.showToast = (title, message, type, duration) => {
    if (window.trackdogEffects) {
        return window.trackdogEffects.showToast(title, message, type, duration);
    }
};

window.showLoading = () => {
    if (window.trackdogEffects) {
        window.trackdogEffects.showLoading();
    }
};

window.hideLoading = () => {
    if (window.trackdogEffects) {
        window.trackdogEffects.hideLoading();
    }
};

window.navigateToPage = (url, callback) => {
    if (window.trackdogEffects) {
        window.trackdogEffects.navigateToPage(url, callback);
    }
};