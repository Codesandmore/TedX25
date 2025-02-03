document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.navbar-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = navLinks.querySelectorAll('a'); // Get all the links

  // Toggle the navbar when the menu button is clicked
  toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
  });

  // Close the navbar after clicking any link
  navItems.forEach(item => {
      item.addEventListener('click', () => {
          navLinks.classList.remove('open'); // Close the menu
      });
  });
});


const themeSection = document.querySelector('.theme-section');
const themeCard = document.querySelector('.theme-card');
const floatingImage = document.createElement('div');
floatingImage.classList.add('catch-image');
themeSection.appendChild(floatingImage);

function getRandomPosition() {
  const sectionRect = themeSection.getBoundingClientRect();
  const cardRect = themeCard.getBoundingClientRect();

  const maxX = sectionRect.width - floatingImage.offsetWidth;
  const maxY = sectionRect.height - floatingImage.offsetHeight;

  let x, y;
  
  do {
    x = Math.random() * maxX;
    y = Math.random() * maxY;
  } while (
    x >= cardRect.left - sectionRect.left &&
    x <= cardRect.right - sectionRect.left &&
    y >= cardRect.top - sectionRect.top &&
    y <= cardRect.bottom - sectionRect.top
  );

  return { x, y };
}

function repositionImage() {
  const { x, y } = getRandomPosition();
  floatingImage.style.left = `${x}px`;
  floatingImage.style.top = `${y}px`;
}

repositionImage();

floatingImage.addEventListener('mouseenter', repositionImage);

const carousel = document.querySelector(".gallery-carousel");
let index = 0;

function showNextImage() {
    index = (index + 1) % carousel.children.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showNextImage, 3000);
