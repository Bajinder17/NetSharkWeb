document.addEventListener('DOMContentLoaded', () => {
    // Handle tab switching
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabId) {
        // Remove active class from all tabs and contents
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to selected tab and content
        const selectedTab = document.querySelector(`[data-tab="${tabId}"]`);
        const selectedContent = document.getElementById(tabId);
        
        if (selectedTab && selectedContent) {
            selectedTab.classList.add('active');
            selectedContent.classList.add('active');
        }
    }

    // Add click event listeners to tabs
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = link.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Handle navigation transparency on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }
    });

    // Handle "View Features" links
    const featureLinks = document.querySelectorAll('.more-details');
    featureLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab('features');
        });
    });
});
