// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function () {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!mobileMenuToggle.contains(event.target) && !navLinks.contains(event.target)) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Close menu when clicking on a nav link
        navLinks.addEventListener('click', function () {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    }

    // Small hover or animation tweaks can be added here
    document.querySelectorAll('.feature').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 0 20px rgba(118,74,241,0.25)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = 'none';
        });
    });
});

const searchInput = document.querySelector('.search-wrapper input');

// Ctrl+K shortcut to focus search
window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (searchInput) searchInput.focus();
    }
});

// Simple navigation with loading for login button
function navigateToPage(url) {
    console.log('Navigating to:', url); // Debug log

    const loginBtn = document.querySelector('.login-btn');

    // Convert clean URLs to actual file paths
    let actualUrl = url;
    if (url === '/login') actualUrl = 'login.html';
    if (url === '/signup') actualUrl = 'signup.html';
    if (url === '/') actualUrl = 'index.html';
    if (url === '/privacy') actualUrl = 'privacy.html';
    if (url === '/terms') actualUrl = 'terms.html';

    console.log('Actual URL:', actualUrl); // Debug log

    if (loginBtn && url === '/login') {
        showLoading(loginBtn, 'Loading');

        setTimeout(() => {
            window.location.href = actualUrl;
        }, 450);
    } else {
        window.location.href = actualUrl;
    }
}

// Make function available globally
window.navigateToPage = navigateToPage;
