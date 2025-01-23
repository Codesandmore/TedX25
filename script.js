document.addEventListener('DOMContentLoaded', () => {
    console.log("Website loaded successfully!");
});

document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    const title = document.getElementById('hero-title');
    const text = document.getElementById('hero-text');
    const btn = document.getElementById('hero-btn');

    setInterval(() => {
        if (heroSection.style.backgroundColor === 'black' || !heroSection.style.backgroundColor) {
            heroSection.style.backgroundColor = 'red';
            title.style.color = 'black';
            text.style.color = 'black';
            btn.style.backgroundColor = 'black';
            btn.style.color = 'white';
        } else {
            heroSection.style.backgroundColor = 'black';
            title.style.color = 'white';
            text.style.color = 'white';
            btn.style.backgroundColor = 'white';
            btn.style.color = 'black';
        }
    }, 5000); // Switch colors every 5 seconds
});
