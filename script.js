document.addEventListener('DOMContentLoaded', function () {
  // ==================== Navigation & UI Interactions ====================
  // Navigation Links Active State
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Button Active State
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => btn.classList.remove('active-btn'));
      this.classList.add('active-btn');
    });
  });

  // ==================== Typing Animation ====================
  const typedTextSpan = document.querySelector('.typed-text');
  if (typedTextSpan) {
    const textArray = ["IT Solutions", "Innovation", "Technology"];
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() { /* ... existing type/erase logic ... */ }
    if (textArray.length) setTimeout(type, 1000);
  }

  // ==================== Smooth Scrolling ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll);
  });

  // ==================== Back to Top Button ====================
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 500 ? 'block' : 'none';
    });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==================== Dark Mode Toggle ====================
  const themeToggle = document.getElementById('darkModeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      themeToggle.innerHTML = document.body.classList.contains('dark-mode') 
        ? '<i class="fas fa-sun"></i> Toggle Light Mode' 
        : '<i class="fas fa-moon"></i> Toggle Dark Mode';
    });
  }

  // ==================== Loading Animation ====================
  const loadingElement = document.getElementById('loading');
  if (loadingElement) {
    window.addEventListener('load', () => {
      loadingElement.style.display = 'none';
    });
  }

  // ==================== Count-Up Animation ====================
  document.querySelectorAll('.count').forEach(element => {
    const target = parseInt(element.dataset.target);
    let count = 0;
    const interval = setInterval(() => {
      count >= target ? clearInterval(interval) : (count++, element.textContent = count);
    }, 20);
  });

  // ==================== AOS Initialization ====================
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }

  // ==================== Chart.js Integration ====================
  const chartElement = document.getElementById('myChart');
  if (chartElement) {
    const ctx = chartElement.getContext('2d');
    new Chart(ctx, { /* ... chart config ... */ });
  }

  // ==================== Particles.js Integration ====================
  const particlesContainer = document.getElementById('particles-js');
  if (particlesContainer) {
    particlesJS.load('particles-js', 'particles.json', () => {
      console.log('Particles loaded!');
    });
  }

  // ==================== Client Carousel ====================
  const carousel = document.querySelector('.client-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => carousel.style.animationPlayState = 'paused');
    carousel.addEventListener('mouseleave', () => carousel.style.animationPlayState = 'running');
  }

  // ==================== FAQ System ====================
  // Toggle Answers
  document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      item.querySelector('.toggle').textContent = answer.style.display === 'block' ? '-' : '+';
    });
  });

  // Question Form
  const addQuestionForm = document.getElementById('add-question-form');
  if (addQuestionForm) {
    document.getElementById('add-question-btn').addEventListener('click', () => {
      addQuestionForm.style.display = 'block';
    });
  }

  // ==================== Video Player ====================
  const mainVideo = document.getElementById('mainVideo');
  if (mainVideo) {
    // ... video player initialization code ...
    initPlaylist();
  }
});

// ==================== Helper Functions ====================
function smoothScroll(e) {
  e.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  if (target) target.scrollIntoView({ behavior: 'smooth' });
}




