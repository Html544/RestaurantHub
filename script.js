document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  
  
  document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  
    // Animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 150) {
          element.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
  });

  // Example for adding interactive elements
  // You can add more functionality here as needed
});
