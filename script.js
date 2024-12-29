// Add interactivity to buttons (e.g., Join Now and Sign Up buttons)
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const link = button.getAttribute('data-link'); // Get the link from the data-link attribute
        if (link) {
            window.location.href = link; // Navigate to the specified link
        }
    });
});

// JavaScript for slider functionality
const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

let currentIndex = 0;

function updateSlider() {
  const slideWidth = slides[0].clientWidth;
  slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

// Automatic sliding
setInterval(() => {
  nextSlide();
}, 5000); // Slides every 5 seconds
