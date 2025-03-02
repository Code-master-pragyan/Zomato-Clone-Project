// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Smooth scroll effect for any anchor links
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            if (targetID) {
                document.getElementById(targetID).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate input field on focus
    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener('focus', () => {
        searchInput.style.transition = 'all 0.4s ease';
        searchInput.style.width = '70%';
    });

    searchInput.addEventListener('blur', () => {
        searchInput.style.width = '60%';
    });

    // Adding an animation to the logo
    const logo = document.querySelector('.logo img');
    logo.addEventListener('mouseover', () => {
        logo.style.transition = 'transform 0.5s ease';
        logo.style.transform = 'rotate(360deg)';
    });

    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'rotate(0deg)';
    });

    // Simple fade-in effect for the main content
    const mainContent = document.querySelector('main');
    window.addEventListener('scroll', () => {
        const contentPosition = mainContent.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (contentPosition < screenPosition) {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
            mainContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        } else {
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateY(100px)';
        }
    });
});
