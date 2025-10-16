// Minimal Loading Effects Only
class SimpleEffects {
    constructor() {
        // No initialization needed
    }    // Simple loading state
    showLoading(button, text = 'Loading') {
        if (!button) return;

        button.disabled = true;
        button.dataset.originalText = button.textContent;
        button.textContent = text;
        button.style.opacity = '0.7';
    }

    hideLoading(button, originalText = null) {
        if (!button) return;

        button.disabled = false;
        button.textContent = originalText || button.dataset.originalText || 'Submit';
        button.style.opacity = '1';
        delete button.dataset.originalText;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.simpleEffects = new SimpleEffects();
});

// Global functions for button loading only
window.showLoading = (button, text) => {
    if (window.simpleEffects) {
        window.simpleEffects.showLoading(button, text);
    }
};

window.hideLoading = (button, text) => {
    if (window.simpleEffects) {
        window.simpleEffects.hideLoading(button, text);
    }
};