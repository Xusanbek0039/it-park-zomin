document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
  });

  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Testimonial slider functionality could go here if needed later
});
