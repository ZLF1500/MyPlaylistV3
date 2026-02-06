// ==========================================
// PREMIUM DARK MUSIC LIBRARY - ZLF MUSIC
// Interactive Features & Functionality
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // === SCROLL TO TOP BUTTON ===
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // === NAVIGATION BUTTONS ===
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            window.history.back();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            window.history.forward();
        });
    }
    
    // === LAZY LOADING FOR IFRAMES ===
    const lazyLoadIframes = () => {
        const iframes = document.querySelectorAll('iframe[data-src]');
        
        const iframeObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target;
                    iframe.src = iframe.dataset.src;
                    iframe.removeAttribute('data-src');
                    iframe.classList.add('loaded');
                    observer.unobserve(iframe);
                }
            });
        }, {
            rootMargin: '100px'
        });
        
        iframes.forEach(iframe => {
            iframeObserver.observe(iframe);
        });
    };
    
    lazyLoadIframes();
    
    // === VIEW TOGGLE (GRID/LIST) ===
    const viewToggle = document.getElementById('viewToggle');
    let isGridView = true;
    
    if (viewToggle) {
        viewToggle.addEventListener('click', () => {
            isGridView = !isGridView;
            
            const grids = document.querySelectorAll('.spotify-grid');
            const icon = viewToggle.querySelector('i');
            
            grids.forEach(grid => {
                if (isGridView) {
                    grid.classList.remove('list-view');
                    icon.className = 'fa-solid fa-grip';
                } else {
                    grid.classList.add('list-view');
                    icon.className = 'fa-solid fa-list';
                }
            });
            
            // Add subtle feedback
            viewToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                viewToggle.style.transform = '';
            }, 150);
        });
    }
    
    // === FILTER FUNCTIONALITY ===
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get filter value
            const filterValue = btn.dataset.filter;
            
            // Get all sections
            const sections = document.querySelectorAll('[data-category]');
            
            sections.forEach(section => {
                if (filterValue === 'all') {
                    section.style.display = 'block';
                    fadeIn(section);
                } else {
                    const category = section.dataset.category;
                    if (category === filterValue) {
                        section.style.display = 'block';
                        fadeIn(section);
                    } else {
                        fadeOut(section);
                    }
                }
            });
        });
    });
    
    // === SEARCH FUNCTIONALITY ===
    const playlistSearch = document.getElementById('playlistSearch');
    const searchInput = document.getElementById('searchInput');
    
    // Search in library page
    if (playlistSearch) {
        playlistSearch.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            filterContent(searchTerm);
        });
    }
    
    // Search in home page (could redirect to library)
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const searchTerm = e.target.value;
                if (searchTerm) {
                    // Store search term and redirect to library
                    sessionStorage.setItem('searchTerm', searchTerm);
                    window.location.href = 'MyPlaylist.html';
                }
            }
        });
    }
    
    // Check if there's a stored search term
    const storedSearchTerm = sessionStorage.getItem('searchTerm');
    if (storedSearchTerm && playlistSearch) {
        playlistSearch.value = storedSearchTerm;
        filterContent(storedSearchTerm.toLowerCase());
        sessionStorage.removeItem('searchTerm');
    }
    
    function filterContent(searchTerm) {
        const sections = document.querySelectorAll('.content-section');
        let hasResults = false;
        
        sections.forEach(section => {
            const sectionTitle = section.querySelector('h2').textContent.toLowerCase();
            const items = section.querySelectorAll('.spotify-item');
            let sectionHasVisibleItems = false;
            
            if (sectionTitle.includes(searchTerm)) {
                section.style.display = 'block';
                items.forEach(item => item.style.display = 'block');
                hasResults = true;
                sectionHasVisibleItems = true;
            } else {
                items.forEach(item => {
                    item.style.display = 'block';
                    sectionHasVisibleItems = true;
                });
                
                if (sectionHasVisibleItems) {
                    section.style.display = 'block';
                    hasResults = true;
                } else {
                    section.style.display = 'none';
                }
            }
        });
        
        // Show "no results" message if needed
        showNoResults(!hasResults && searchTerm !== '');
    }
    
    function showNoResults(show) {
        let noResultsMsg = document.getElementById('noResultsMessage');
        
        if (show) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.id = 'noResultsMessage';
                noResultsMsg.style.cssText = `
                    text-align: center;
                    padding: 60px 20px;
                    color: var(--text-secondary);
                `;
                noResultsMsg.innerHTML = `
                    <i class="fa-solid fa-search" style="font-size: 48px; margin-bottom: 16px; opacity: 0.3;"></i>
                    <h3 style="font-size: 24px; margin-bottom: 8px;">No results found</h3>
                    <p>Try searching for something else</p>
                `;
                
                const mainContent = document.querySelector('.main-content');
                const firstSection = mainContent.querySelector('.content-section');
                if (firstSection) {
                    firstSection.parentNode.insertBefore(noResultsMsg, firstSection);
                }
            }
            noResultsMsg.style.display = 'block';
        } else {
            if (noResultsMsg) {
                noResultsMsg.style.display = 'none';
            }
        }
    }
    
    // === SMOOTH SCROLL FOR ANCHOR LINKS ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const offset = 100; // Account for sticky headers
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // === INTERSECTION OBSERVER FOR ANIMATIONS ===
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.content-section, .stat-card, .featured-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(30px)';
                    
                    setTimeout(() => {
                        entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        elements.forEach(el => observer.observe(el));
    };
    
    animateOnScroll();
    
    // === NOW PLAYING BAR CONTROLS ===
    const playBtn = document.querySelector('.play-btn');
    const volumeSlider = document.querySelector('.volume-slider');
    
    if (playBtn) {
        let isPlaying = false;
        
        playBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            const icon = playBtn.querySelector('i');
            
            if (isPlaying) {
                icon.className = 'fa-solid fa-pause';
            } else {
                icon.className = 'fa-solid fa-play';
            }
        });
    }
    
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            const volumeIcon = document.querySelector('.volume-controls .control-btn i');
            
            if (volumeIcon) {
                if (value == 0) {
                    volumeIcon.className = 'fa-solid fa-volume-xmark';
                } else if (value < 50) {
                    volumeIcon.className = 'fa-solid fa-volume-low';
                } else {
                    volumeIcon.className = 'fa-solid fa-volume-high';
                }
            }
        });
    }
    
    // === SPOTIFY IFRAME INTERACTION ===
    const spotifyItems = document.querySelectorAll('.spotify-item');
    
    spotifyItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Add subtle scale effect
            item.style.transform = 'scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
        });
    });
    
    // === UTILITY FUNCTIONS ===
    function fadeIn(element) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.4s ease';
            element.style.opacity = '1';
        }, 10);
    }
    
    function fadeOut(element) {
        element.style.transition = 'opacity 0.4s ease';
        element.style.opacity = '0';
        
        setTimeout(() => {
            element.style.display = 'none';
        }, 400);
    }
    
    // === ENHANCED HOVER EFFECTS ===
    const cards = document.querySelectorAll('.stat-card, .featured-card, .recommendation-card, .info-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function(e) {
            this.style.transform = '';
        });
    });
    
    // === FILTER BAR STICKY BEHAVIOR ===
    const filterBar = document.querySelector('.filter-bar');
    
    if (filterBar) {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 200) {
                filterBar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
            } else {
                filterBar.style.boxShadow = '';
            }
            
            lastScroll = currentScroll;
        });
    }
    
    // === DYNAMIC LOADING INDICATOR ===
    const addLoadingIndicator = () => {
        const iframes = document.querySelectorAll('iframe[data-src]');
        
        iframes.forEach(iframe => {
            const parent = iframe.parentElement;
            
            // Create loading overlay
            const loadingOverlay = document.createElement('div');
            loadingOverlay.className = 'loading-overlay';
            loadingOverlay.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: var(--bg-elevated);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: var(--radius-lg);
                z-index: 10;
            `;
            
            loadingOverlay.innerHTML = `
                <div style="text-align: center; color: var(--text-secondary);">
                    <i class="fa-solid fa-circle-notch fa-spin" style="font-size: 32px; margin-bottom: 12px;"></i>
                    <div style="font-size: 14px;">Loading...</div>
                </div>
            `;
            
            parent.style.position = 'relative';
            parent.appendChild(loadingOverlay);
            
            // Remove loading overlay when iframe loads
            iframe.addEventListener('load', () => {
                setTimeout(() => {
                    loadingOverlay.style.opacity = '0';
                    loadingOverlay.style.transition = 'opacity 0.3s ease';
                    setTimeout(() => loadingOverlay.remove(), 300);
                }, 500);
            });
        });
    };
    
    addLoadingIndicator();
    
    // === KEYBOARD SHORTCUTS ===
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K for search focus
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('playlistSearch') || document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
            }
        }
        
        // Escape to clear search
        if (e.key === 'Escape') {
            const searchInput = document.getElementById('playlistSearch') || document.getElementById('searchInput');
            if (searchInput && searchInput === document.activeElement) {
                searchInput.value = '';
                searchInput.blur();
                filterContent('');
            }
        }
    });
    
    // === WELCOME ANIMATION ===
    const runWelcomeAnimation = () => {
        const hero = document.querySelector('.hero');
        if (hero && !sessionStorage.getItem('welcomeShown')) {
            setTimeout(() => {
                hero.style.animation = 'none';
                void hero.offsetWidth; // Trigger reflow
                hero.style.animation = null;
            }, 100);
            
            sessionStorage.setItem('welcomeShown', 'true');
        }
    };
    
    runWelcomeAnimation();
    
    // === STATS COUNTER ANIMATION ===
    const animateValue = (element, start, end, duration) => {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + '+';
        }, 16);
    };
    
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const finalValue = parseInt(entry.target.textContent);
                entry.target.textContent = '0+';
                animateValue(entry.target, 0, finalValue, 1000);
                entry.target.classList.add('animated');
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => statsObserver.observe(stat));
    
    // === PERFORMANCE OPTIMIZATION ===
    // Debounce function for search
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to search
    if (playlistSearch) {
        const debouncedSearch = debounce((searchTerm) => {
            filterContent(searchTerm);
        }, 300);
        
        playlistSearch.addEventListener('input', (e) => {
            debouncedSearch(e.target.value.toLowerCase());
        });
    }
    
    console.log('🎵 ZLF Music Library - Premium Experience Loaded');
});
