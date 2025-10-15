/**
 * ASLAM VILLAN - RESEARCH SCIENTIST WEBSITE
 * Modern JavaScript for Navigation and Interactions
 * 
 * This script handles:
 * - Section navigation and switching
 * - Active state management
 * - Smooth transitions
 * - Responsive behavior
 * - Accessibility features
 */

// =============================================================================
// GLOBAL VARIABLES AND CONSTANTS
// =============================================================================

const SECTIONS = {
    LANDING: 'landing',
    ABOUT: 'about',
    RESEARCH: 'research',
    PUBLICATIONS: 'publications',
    GALLERY: 'gallery'
};

const TRANSITION_DURATION = 250; // milliseconds
const DEFAULT_SECTION = SECTIONS.LANDING; // Default active section

// =============================================================================
// DOM ELEMENTS CACHE
// =============================================================================

let navLinks;
let contentSections;
let currentActiveSection = DEFAULT_SECTION;

// =============================================================================
// INITIALIZATION
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 ASLAM VILLAN Website Initialized');
    
    // Cache DOM elements
    cacheDOMElements();
    
    // Initialize navigation
    initializeNavigation();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize default section
    showSection(DEFAULT_SECTION);
    
    // Add loading complete class for smooth animations
    document.body.classList.add('loaded');
});

/**
 * Cache frequently used DOM elements for better performance
 */
function cacheDOMElements() {
    navLinks = document.querySelectorAll('.nav-link');
    contentSections = document.querySelectorAll('.content-section');
    
    console.log(`📋 Cached ${navLinks.length} nav links and ${contentSections.length} content sections`);
}

/**
 * Initialize navigation system
 */
function initializeNavigation() {
    // Set up navigation link click handlers
    navLinks.forEach(link => {
        const section = link.getAttribute('data-section');
        if (section && Object.values(SECTIONS).includes(section)) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navigateToSection(section);
            });
        }
    });
    
    console.log('🧭 Navigation system initialized');
}

/**
 * Set up additional event listeners
 */
function setupEventListeners() {
    // Handle window resize for responsive behavior
    window.addEventListener('resize', debounce(handleResize, 150));
    
    // Handle keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Handle scroll events for potential future features
    window.addEventListener('scroll', throttle(handleScroll, 100));
    
    // Handle image load errors gracefully
    setupImageErrorHandling();
    
    console.log('👂 Event listeners set up');
}

// =============================================================================
// NAVIGATION FUNCTIONS
// =============================================================================

/**
 * Navigate to a specific section
 * @param {string} sectionId - The ID of the section to navigate to
 */
function navigateToSection(sectionId) {
    if (!Object.values(SECTIONS).includes(sectionId)) {
        console.warn(`⚠️ Invalid section: ${sectionId}`);
        return;
    }
    
    if (sectionId === currentActiveSection) {
        console.log(`📍 Already on section: ${sectionId}`);
        return;
    }
    
    console.log(`🎯 Navigating to section: ${sectionId}`);
    
    // Update active navigation link
    updateActiveNavLink(sectionId);
    
    // Show the target section
    showSection(sectionId);
    
    // Update current active section
    currentActiveSection = sectionId;
    
    // Update URL hash without triggering scroll
    updateURLHash(sectionId);
    
    // Announce section change for accessibility
    announceSectionChange(sectionId);
}

/**
 * Update the active navigation link
 * @param {string} sectionId - The ID of the active section
 */
function updateActiveNavLink(sectionId) {
    navLinks.forEach(link => {
        const linkSection = link.getAttribute('data-section');
        if (linkSection === sectionId) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
}

/**
 * Show a specific content section with smooth transition
 * @param {string} sectionId - The ID of the section to show
 */
function showSection(sectionId) {
    contentSections.forEach(section => {
        if (section.id === sectionId) {
            // Show the target section
            section.classList.remove('hidden');
            section.setAttribute('aria-hidden', 'false');
            
            // Add a small delay for smooth transition
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 50);
        } else {
            // Hide other sections
            section.classList.add('hidden');
            section.setAttribute('aria-hidden', 'true');
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
        }
    });
}

/**
 * Update URL hash without triggering browser scroll
 * @param {string} sectionId - The section ID to set as hash
 */
function updateURLHash(sectionId) {
    const newUrl = `${window.location.pathname}#${sectionId}`;
    if (window.location.hash !== `#${sectionId}`) {
        window.history.replaceState(null, null, newUrl);
    }
}

/**
 * Announce section change for screen readers
 * @param {string} sectionId - The ID of the new active section
 */
function announceSectionChange(sectionId) {
    const sectionName = getSectionDisplayName(sectionId);
    const announcement = `Now viewing ${sectionName} section`;
    
    // Create or update aria-live region
    let liveRegion = document.getElementById('aria-live-region');
    if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'aria-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.style.position = 'absolute';
        liveRegion.style.left = '-10000px';
        liveRegion.style.width = '1px';
        liveRegion.style.height = '1px';
        liveRegion.style.overflow = 'hidden';
        document.body.appendChild(liveRegion);
    }
    
    liveRegion.textContent = announcement;
}

/**
 * Get display name for section
 * @param {string} sectionId - The section ID
 * @returns {string} Display name for the section
 */
function getSectionDisplayName(sectionId) {
    const displayNames = {
        [SECTIONS.LANDING]: 'Home',
        [SECTIONS.ABOUT]: 'About',
        [SECTIONS.RESEARCH]: 'Research',
        [SECTIONS.PUBLICATIONS]: 'Publications',
        [SECTIONS.GALLERY]: 'Gallery'
    };
    return displayNames[sectionId] || sectionId;
}

// =============================================================================
// EVENT HANDLERS
// =============================================================================

/**
 * Handle window resize events
 */
function handleResize() {
    // Recalculate layout if needed
    const isMobile = window.innerWidth <= 768;
    document.body.classList.toggle('mobile-layout', isMobile);
    
    // Update navigation for mobile
    if (isMobile) {
        // Additional mobile-specific logic can go here
        console.log('📱 Mobile layout activated');
    } else {
        console.log('💻 Desktop layout activated');
    }
}

/**
 * Handle keyboard navigation
 * @param {KeyboardEvent} event - The keyboard event
 */
function handleKeyboardNavigation(event) {
    // Handle arrow key navigation between sections
    if (event.altKey) {
        const currentIndex = Object.values(SECTIONS).indexOf(currentActiveSection);
        let targetIndex = currentIndex;
        
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowLeft':
                event.preventDefault();
                targetIndex = currentIndex > 0 ? currentIndex - 1 : Object.values(SECTIONS).length - 1;
                break;
            case 'ArrowDown':
            case 'ArrowRight':
                event.preventDefault();
                targetIndex = currentIndex < Object.values(SECTIONS).length - 1 ? currentIndex + 1 : 0;
                break;
        }
        
        if (targetIndex !== currentIndex) {
            const targetSection = Object.values(SECTIONS)[targetIndex];
            navigateToSection(targetSection);
        }
    }
    
    // Handle escape key to reset to default section
    if (event.key === 'Escape') {
        navigateToSection(DEFAULT_SECTION);
    }
}

/**
 * Handle scroll events
 * @param {Event} event - The scroll event
 */
function handleScroll(event) {
    // Future scroll-based features can be implemented here
    // For example: parallax effects, scroll-based animations, etc.
}

/**
 * Set up graceful image error handling
 */
function setupImageErrorHandling() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.log(`🖼️ Image failed to load: ${this.src}`);
            // The CSS already handles showing placeholder on error
        });
        
        img.addEventListener('load', function() {
            console.log(`✅ Image loaded successfully: ${this.src}`);
            this.style.opacity = '1';
        });
    });
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Debounce function to limit the rate of function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
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

/**
 * Throttle function to limit the rate of function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Check if an element is in viewport
 * @param {Element} element - Element to check
 * @returns {boolean} True if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Smooth scroll to element
 * @param {Element} element - Element to scroll to
 * @param {number} offset - Offset from top in pixels
 */
function smoothScrollToElement(element, offset = 0) {
    const targetPosition = element.offsetTop - offset;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// =============================================================================
// ANALYTICS AND PERFORMANCE
// =============================================================================

/**
 * Track section views for analytics
 * @param {string} sectionId - The section that was viewed
 */
function trackSectionView(sectionId) {
    // This can be connected to analytics services like Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'section_view', {
            'section_name': sectionId,
            'page_title': `ASLAM VILLAN - ${getSectionDisplayName(sectionId)}`
        });
    }
    
    console.log(`📊 Section view tracked: ${sectionId}`);
}

/**
 * Measure performance metrics
 */
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('⚡ Performance Metrics:', {
                    'DOM Content Loaded': Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart),
                    'Page Load Time': Math.round(perfData.loadEventEnd - perfData.loadEventStart),
                    'Total Load Time': Math.round(perfData.loadEventEnd - perfData.fetchStart)
                });
            }, 0);
        });
    }
}

// =============================================================================
// INITIALIZATION HELPERS
// =============================================================================

/**
 * Initialize performance monitoring
 */
function initializePerformanceMonitoring() {
    measurePerformance();
    
    // Track section views
    const originalNavigateToSection = navigateToSection;
    navigateToSection = function(sectionId) {
        originalNavigateToSection(sectionId);
        trackSectionView(sectionId);
    };
}

// =============================================================================
// PUBLIC API (for potential external use)
// =============================================================================

// Expose navigation functions to global scope if needed
window.AslamWebsite = {
    navigateToSection,
    getCurrentSection: () => currentActiveSection,
    getAvailableSections: () => Object.values(SECTIONS)
};

// =============================================================================
// ERROR HANDLING
// =============================================================================

window.addEventListener('error', function(event) {
    console.error('🚨 JavaScript Error:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
    });
});

// Initialize performance monitoring
initializePerformanceMonitoring();

console.log('✅ Script loaded successfully');
