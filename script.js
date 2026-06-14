// Smooth scroll behavior is handled by CSS
// Additional interactivity can be added here

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = this.querySelector('input[name="name"]').value;
      const email = this.querySelector('input[name="email"]').value;
      const message = this.querySelector('textarea[name="message"]').value;
      
      // Simple validation
      if (name && email && message) {
        console.log('Form submitted:', { name, email, message });
        // Replace with actual form submission logic
        alert('Thank you for reaching out! We will contact you soon.');
        this.reset();
      }
    });
  }
  
  // Add fade-in animation on scroll (optional enhancement)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);
  
  // Observe course cards and step cards for animation
  document.querySelectorAll('.course-card, .step-card, .about-card').forEach(el => {
    observer.observe(el);
  });
});
