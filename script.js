// Scroll fade-in animation
const fadeEls = document.querySelectorAll('.fade-in, .music-card, .gallery-grid img');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => observer.observe(el));

// Contact form fake submit
const form = document.querySelector('.contact-form');
if(form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    form.reset();
  });
}
