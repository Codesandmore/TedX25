/* document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    const title = document.getElementById('hero-title');
    const text = document.getElementById('hero-text');
    const btn = document.getElementById('hero-btn');

    setInterval(() => {
        // Fetch the current background color using computed styles
        const bgColor = getComputedStyle(heroSection).backgroundColor;
        
        if (bgColor === 'rgb(0, 0, 0)') { // Black background
            heroSection.style.backgroundColor = '#bc2127'; // Red background
            title.style.color = 'black';
            text.style.color = 'black';
            btn.style.backgroundColor = 'black';
            btn.style.color = 'white';
        } else { 
            heroSection.style.backgroundColor = 'black'; // Black background
            title.style.color = 'white';
            text.style.color = 'white';
            btn.style.backgroundColor = 'white';
            btn.style.color = 'black';
        }
    }, 4000); // Switch colors every 5 seconds
});
 */
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});
