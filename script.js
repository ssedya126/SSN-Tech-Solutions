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



document.addEventListener('DOMContentLoaded', function() {
  // Initialize Particles.js with inline config
  particlesJS('particles-js', {
    particles: {
      number: { value: 80 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      }
    },
    retina_detect: true
  });

  // Rest of your JS code...
});



// ==================== Typing Animation ====================
const typedTextSpan = document.querySelector('.typed-text');
const textArray = ["IT Solutions", "Innovation", "Technology"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});



//darkModeToggle
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('darkModeToggle');
  
  // Check localStorage for saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Toggle Light Mode';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Save to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update button icon
    themeToggle.innerHTML = isDarkMode 
      ? '<i class="fas fa-sun"></i> Toggle Light Mode'
      : '<i class="fas fa-moon"></i> Toggle Dark Mode';
  });
});


// Get the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Add event listener to the toggle button
darkModeToggle.addEventListener('click', () => {
  // Toggle dark mode class on the body element
  document.body.classList.toggle('dark-mode');
});


 // DOM Elements
        const videoPlayer = document.getElementById('videoPlayer');
        const playlistItems = document.querySelectorAll('#playlist li');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const pauseBtn = document.getElementById('pauseBtn');

        // Player State
        let currentIndex = 0;

        // Initialize player
        function initializePlayer() {
            // Set first video as active
            playlistItems[currentIndex].classList.add('active');
            videoPlayer.src = playlistItems[currentIndex].dataset.videoSrc;
        }

        // Update video and active state
        function updateVideo(index) {
            currentIndex = index;
            
            // Remove active class from all items
            playlistItems.forEach(item => item.classList.remove('active'));
            
            // Set new active item and load video
            playlistItems[currentIndex].classList.add('active');
            videoPlayer.src = playlistItems[currentIndex].dataset.videoSrc;
            videoPlayer.play();
        }

        // Playlist click handler
        document.getElementById('playlist').addEventListener('click', (e) => {
            const listItem = e.target.closest('li');
            if (listItem) {
                const index = Array.from(playlistItems).indexOf(listItem);
                updateVideo(index);
            }
        });

        // Control buttons
        prevBtn.addEventListener('click', () => {
            const newIndex = (currentIndex - 1 + playlistItems.length) % playlistItems.length;
            updateVideo(newIndex);
        });

        nextBtn.addEventListener('click', () => {
            const newIndex = (currentIndex + 1) % playlistItems.length;
            updateVideo(newIndex);
        });

        pauseBtn.addEventListener('click', () => {
            videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause();
        });

        // Auto-play next video when current ends
        videoPlayer.addEventListener('ended', () => {
            const newIndex = (currentIndex + 1) % playlistItems.length;
            updateVideo(newIndex);
        });

        // Initialize the player
        initializePlayer();