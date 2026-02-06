// Theme Switcher Handler for ZLF Music Library

class ThemeManager {
    constructor() {
        this.currentTheme = this.getSavedTheme() || 'dark';
        this.init();
    }

    // Get saved theme from localStorage
    getSavedTheme() {
        return localStorage.getItem('zlfMusicTheme');
    }

    // Save theme to localStorage
    saveTheme(theme) {
        localStorage.setItem('zlfMusicTheme', theme);
    }

    // Initialize theme
    init() {
        this.applyTheme(this.currentTheme);
        this.setupToggleButton();
        
        // Listen for system theme changes (optional)
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                // Only auto-switch if user hasn't manually set preference
                if (!localStorage.getItem('zlfMusicTheme')) {
                    this.setTheme(e.matches ? 'dark' : 'light', false);
                }
            });
        }
    }

    // Apply theme to document
    applyTheme(theme) {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        this.currentTheme = theme;
    }

    // Toggle between themes
    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    // Set specific theme
    setTheme(theme, save = true) {
        this.applyTheme(theme);
        if (save) {
            this.saveTheme(theme);
        }
        
        // Update toggle button
        this.updateToggleButton();
        
        // Add transition effect
        document.body.classList.add('theme-changing');
        setTimeout(() => {
            document.body.classList.remove('theme-changing');
        }, 500);
        
        // Dispatch event
        window.dispatchEvent(new CustomEvent('themeChanged', { 
            detail: { theme: theme } 
        }));
    }

    // Setup toggle button
    setupToggleButton() {
        const toggleBtn = document.getElementById('themeToggle');
        if (!toggleBtn) return;
        
        toggleBtn.addEventListener('click', () => {
            this.toggleTheme();
        });
        
        this.updateToggleButton();
    }

    // Update toggle button appearance
    updateToggleButton() {
        const toggleBtn = document.getElementById('themeToggle');
        if (!toggleBtn) return;
        
        const tooltip = this.currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        toggleBtn.setAttribute('data-tooltip', tooltip);
        toggleBtn.setAttribute('title', tooltip);
    }

    // Get current theme
    getTheme() {
        return this.currentTheme;
    }

    // Check if theme is dark
    isDark() {
        return this.currentTheme === 'dark';
    }

    // Check if theme is light
    isLight() {
        return this.currentTheme === 'light';
    }
}

// Initialize theme manager
const themeManager = new ThemeManager();

// Make it globally accessible
window.themeManager = themeManager;

// Auto-initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Theme is already initialized in constructor
    console.log('Theme Manager initialized:', themeManager.getTheme());
    
    // Optional: Log theme changes
    window.addEventListener('themeChanged', (e) => {
        console.log('Theme changed to:', e.detail.theme);
    });
});

// Utility function to get translated theme name
function getThemeName(theme) {
    if (typeof i18n !== 'undefined') {
        return theme === 'dark' ? 
            (i18n.t('darkMode') || 'Dark Mode') : 
            (i18n.t('lightMode') || 'Light Mode');
    }
    return theme === 'dark' ? 'Dark Mode' : 'Light Mode';
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeManager;
}
