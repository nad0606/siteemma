 /*fonction pour faire appraitre au scroll */
  const elements = document.querySelectorAll('.apparition');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      
      const index = Array.from(elements).indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 120);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});
elements.forEach(el => observer.observe(el));