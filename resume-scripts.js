// Resume Scripts for Scott M. Kanas

// Mobile Navigation functionality
function initializeMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
}

// Project expand/collapse functionality - DRY implementation
function initializeProjectToggles() {
    // Remove all existing onclick attributes
    document.querySelectorAll('.expand-btn').forEach(btn => {
        btn.removeAttribute('onclick');
    });
    
    // Add event listeners using event delegation
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('expand-btn') || e.target.classList.contains('project-title')) {
            const button = e.target.classList.contains('expand-btn') ? e.target : e.target.closest('.project-item').querySelector('.expand-btn');
            toggleProject(button);
        }
    });
}

function toggleProject(button) {
    const projectItem = button.closest('.project-item');
    const description = projectItem.querySelector('.project-description');
    const isExpanded = description.classList.contains('expanded');
    
    if (isExpanded) {
        // Collapse
        description.classList.remove('expanded');
        button.textContent = '+';
        button.classList.remove('expanded');
    } else {
        // Expand
        description.classList.add('expanded');
        button.textContent = '−';
        button.classList.add('expanded');
    }
}

// Job collapse functionality - DRY implementation
function initializeJobToggles() {
    // Remove any existing event listeners to prevent duplicates
    document.removeEventListener('click', handleJobCollapse);
    
    // Add event listeners using event delegation
    document.addEventListener('click', handleJobCollapse);
}

function handleJobCollapse(e) {
    if (e.target.classList.contains('job-collapse-btn') || e.target.closest('.job-collapse-btn')) {
        const button = e.target.classList.contains('job-collapse-btn') ? e.target : e.target.closest('.job-collapse-btn');
        toggleJob(button);
    }
}

function toggleJob(button) {
    const experienceItem = button.closest('.experience-item');
    const jobContent = experienceItem.querySelector('.job-content');
    const companyHeader = experienceItem.querySelector('.company-header');
    const isCollapsed = jobContent.classList.contains('collapsed');
    
    if (isCollapsed) {
        // Expand
        jobContent.classList.remove('collapsed');
        button.querySelector('span').textContent = '−';
        button.classList.remove('collapsed');
        companyHeader.classList.remove('collapsed');
    } else {
        // Collapse
        jobContent.classList.add('collapsed');
        button.querySelector('span').textContent = '+';
        button.classList.add('collapsed');
        companyHeader.classList.add('collapsed');
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile navigation
    initializeMobileNavigation();
    
    // Initialize project toggles
    initializeProjectToggles();
    
    // Initialize job collapse toggles
    initializeJobToggles();
    
    // Render experience data if available
    if (typeof renderExperience === 'function') {
        renderExperience();
        // Re-initialize job toggles after rendering experience data
        setTimeout(initializeJobToggles, 100);
        // Re-initialize Lucide icons after rendering experience data
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 200);
    } else {
        // If renderExperience is not available yet, wait a bit and try again
        setTimeout(() => {
            if (typeof renderExperience === 'function') {
                renderExperience();
                setTimeout(initializeJobToggles, 100);
                setTimeout(() => {
                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons();
                    }
                }, 200);
            }
        }, 100);
    }
});

// Also keep window load as backup
window.addEventListener('load', function() {
    // If experience wasn't rendered yet, try again
    if (!document.querySelector('#experience-container').children.length && typeof renderExperience === 'function') {
        renderExperience();
        setTimeout(initializeJobToggles, 100);
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 200);
    }
});
