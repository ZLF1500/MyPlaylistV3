// Language Selector Handler for ZLF Music Library

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSelector();
    
    // Listen for language changes
    window.addEventListener('languageChanged', (e) => {
        updateCurrentLanguageDisplay(e.detail.language);
        
        // Add animation to body
        document.body.classList.add('language-changing');
        setTimeout(() => {
            document.body.classList.remove('language-changing');
        }, 500);
    });
});

function initLanguageSelector() {
    const selector = document.getElementById('languageSelector');
    const toggle = document.getElementById('languageToggle');
    const dropdown = document.getElementById('languageDropdown');
    
    if (!selector || !toggle || !dropdown) return;
    
    // Populate language dropdown
    populateLanguages();
    
    // Update current language display
    updateCurrentLanguageDisplay(i18n.currentLang);
    
    // Toggle dropdown
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        selector.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!selector.contains(e.target)) {
            selector.classList.remove('active');
        }
    });
    
    // Prevent dropdown from closing when clicking inside
    dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

function populateLanguages() {
    const dropdown = document.getElementById('languageDropdown');
    if (!dropdown) return;
    
    const languages = i18n.getAvailableLanguages();
    const currentLang = i18n.currentLang;
    
    dropdown.innerHTML = languages.map(lang => `
        <div class="language-option ${lang.code === currentLang ? 'active' : ''}" 
             data-lang="${lang.code}">
            <span class="language-flag">${lang.flag}</span>
            <span class="language-name">${lang.name}</span>
            <i class="fa-solid fa-check"></i>
        </div>
    `).join('');
    
    // Add click handlers
    dropdown.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', () => {
            const langCode = option.getAttribute('data-lang');
            changeLanguage(langCode);
        });
    });
}

function changeLanguage(langCode) {
    // Update language
    if (i18n.setLanguage(langCode)) {
        // Update active states
        document.querySelectorAll('.language-option').forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === langCode);
        });
        
        // Close dropdown
        document.getElementById('languageSelector')?.classList.remove('active');
        
        // Show success feedback (optional)
        showLanguageChangeNotification();
    }
}

function updateCurrentLanguageDisplay(langCode) {
    const currentFlag = document.getElementById('currentFlag');
    const currentLangName = document.getElementById('currentLangName');
    
    if (currentFlag && currentLangName) {
        const langInfo = i18n.languageNames[langCode];
        if (langInfo) {
            currentFlag.textContent = langInfo.flag;
            currentLangName.textContent = langInfo.name;
        }
    }
}

function showLanguageChangeNotification() {
    // Optional: Add a subtle notification when language changes
    const notification = document.createElement('div');
    notification.className = 'language-notification';
    notification.innerHTML = `
        <i class="fa-solid fa-check-circle"></i>
        <span>${i18n.t('language')} ${i18n.t('selectLanguage').toLowerCase()}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--accent-primary);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.9rem;
        font-weight: 500;
        box-shadow: 0 10px 40px rgba(29, 185, 84, 0.3);
        z-index: 10000;
        animation: slideInUp 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideOutDown {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(20px);
    }
}
`;
document.head.appendChild(style);
