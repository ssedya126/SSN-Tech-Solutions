
  // Get all navigation links
  const navLinks = document.querySelectorAll('nav ul li a');

  // Add click event listener to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Remove 'active' class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      // Add 'active' class to the clicked link
      this.classList.add('active');
    });
  });
  // Get all buttons with the class 'btn'
  const buttons = document.querySelectorAll('.btn');

  // Add click event listener to each button
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove 'active-btn' class from all buttons
      buttons.forEach(button => button.classList.remove('active-btn'));
      // Add 'active-btn' class to the clicked button
      this.classList.add('active-btn');
    });
  });


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

  document.addEventListener('DOMContentLoaded', function () {
    if (textArray.length) setTimeout(type, newTextDelay);
  });


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
 
  window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 500) { 
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  // Dark Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.innerHTML = document.body.classList.contains('dark-mode') ?
      '<i class="fas fa-sun"></i> Toggle Light Mode' :
      '<i class="fas fa-moon"></i> Toggle Dark Mode';
  });

// Loading Animation
  window.addEventListener('load', function () {
    document.getElementById('loading').style.display = 'none';
  });

  // Count-Up Animation
  const countElements = document.querySelectorAll('.count');
  countElements.forEach((element) => {
    const target = parseInt(element.getAttribute('data-target'));
    let count = 0;
    const interval = setInterval(() => {
      if (count >= target) {
        clearInterval(interval);
      } else {
        count++;
        element.textContent = count;
      }
    }, 20);
  });
  AOS.init();
 const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Python', 'JavaScript', 'Java'],
        datasets: [{
          label: 'Skill Level',
          data: [90, 80, 70],
          backgroundColor: ['#007BFF', '#28a745', '#dc3545'],
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
	
	 particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles loaded!');
  });
  
  <!-- Optional JavaScript for Pause on Hover -->
    const carousel = document.querySelector('.client-carousel');

    // Pause animation on hover
    carousel.addEventListener('mouseenter', () => {
      carousel.style.animationPlayState = 'paused';
    });

    // Resume animation on mouse leave
    carousel.addEventListener('mouseleave', () => {
      carousel.style.animationPlayState = 'running';
    });
 
// Toggle FAQ Answers
document.querySelectorAll('.faq-item h3').forEach((item) => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    item.querySelector('.toggle').textContent = answer.style.display === 'block' ? '-' : '+';
  });
});

// Show Add Question Form
const addQuestionBtn = document.getElementById('add-question-btn');
const addQuestionForm = document.getElementById('add-question-form');

addQuestionBtn.addEventListener('click', () => {
  addQuestionForm.style.display = 'block';
});

// Add New Question
const questionForm = document.getElementById('question-form');
const faqList = document.getElementById('faq-list');

questionForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  const questionInput = document.getElementById('question-input');
  const answerInput = document.getElementById('answer-input');

  // Create new FAQ item
  const newFaqItem = document.createElement('div');
  newFaqItem.className = 'faq-item';

  const newFaqQuestion = document.createElement('h3');
  newFaqQuestion.innerHTML =`${questionInput.value}<span class="toggle">+</span>`;

  const newFaqAnswer = document.createElement('p');
  newFaqAnswer.className = 'answer';
  newFaqAnswer.textContent = answerInput.value;

  // Add toggle functionality to the new FAQ item
  newFaqQuestion.addEventListener('click', () => {
    newFaqAnswer.style.display = newFaqAnswer.style.display === 'block' ? 'none' : 'block';
    newFaqQuestion.querySelector('.toggle').textContent = newFaqAnswer.style.display === 'block' ? '-' : '+';
  });

  // Append new FAQ item to the list
  newFaqItem.appendChild(newFaqQuestion);
  newFaqItem.appendChild(newFaqAnswer);
  faqList.appendChild(newFaqItem);

  // Clear the form
  questionInput.value = '';
  answerInput.value = '';
  addQuestionForm.style.display = 'none';
});




// Video playlist configuration
const playlist = [
	{
		title: "Network Security Basics",
		sources: [
			{ src: "videos/network-security.mp4", type: "video/mp4" },
			
		],
		thumbnail: "videos/security-thumb.jpg"
	},
	{
		title: "Data Center",
		sources: [
			{ src: "videos/data-center.mp4", type: "video/mp4" },
			
		],
		thumbnail: "videos/cloud-thumb.jpg"
	},
	{
		title: "cyber Security",
		sources: [
			{ src: "videos/cyber-security.mp4", type: "video/mp4" },
			
		],
		thumbnail: "videos/cyber-thumb.jpg"
	}
];





// DOM Elements
const mainVideo = document.getElementById('mainVideo');
const playlistContainer = document.getElementById('playlist');
const nextBtn = document.getElementById('nextBtn');
let currentVideoIndex = 0;

// Initialize playlist
function initPlaylist() {
	playlist.forEach((video, index) => {
		const thumbnail = document.createElement('div');
		thumbnail.className = 'video-thumbnail';
		thumbnail.innerHTML = `
			<img src="${video.thumbnail}" alt="${video.title}">
			<div class="video-info">${video.title}</div>
		`;
		thumbnail.onclick = () => loadVideo(index);
		playlistContainer.appendChild(thumbnail);
	});
	loadVideo(0);
}

// Load selected video
function loadVideo(index) {
	currentVideoIndex = index;
	mainVideo.innerHTML = '';
	
	playlist[index].sources.forEach(source => {
		const sourceElem = document.createElement('source');
		sourceElem.src = source.src;
		sourceElem.type = source.type;
		mainVideo.appendChild(sourceElem);
	});

	mainVideo.load();
	mainVideo.play();
}

// Next video functionality
function playNext() {
	currentVideoIndex = (currentVideoIndex + 1) % playlist.length;
	loadVideo(currentVideoIndex);
}

// Event listeners
mainVideo.addEventListener('ended', playNext);
nextBtn.addEventListener('click', playNext);

// Initialize the player
initPlaylist();
