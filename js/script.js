// Quizzer Application Main Script

document.addEventListener('DOMContentLoaded', () => {

  // --- Global Auth Check ---
  fetch('auth/auth_check.php')
    .then(res => res.json())
    .then(data => {
      const path = window.location.pathname;
      const isProtected = path.includes('quiz.html') || path.includes('result.html');
      
      if (data.logged_in) {
        document.querySelectorAll('a[href="login.html"]').forEach(link => {
          link.href = '#';
          link.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket"></i> <span>Log Out</span>';
          link.addEventListener('click', (e) => {
            e.preventDefault();
            fetch('auth/logout.php').then(() => window.location.href = 'index.php');
          });
        });

        const dbUserName = document.getElementById('dbUserName');
        if (dbUserName) {
          dbUserName.innerText = data.email.split('@')[0];
          const dbEmail = document.getElementById('dbUserEmail');
          if(dbEmail) dbEmail.innerText = data.email;
          const navName = document.getElementById('navUserName');
          if(navName) navName.innerText = data.email.split('@')[0];
        }
      } else {
        if (isProtected) {
          window.location.href = 'login.html';
        }
        
        // Protect quiz start buttons for guests
        const startButtons = document.querySelectorAll('a[href^="quiz.html"]');
        startButtons.forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'login.html';
          });
        });
      }
    }).catch(err => console.error(err));

  // --- 1. General Animations ---
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
  });

  // --- 2. Form Validation (Contact Us Page) ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const emailAddress = document.getElementById('emailAddress').value;
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName') ? document.getElementById('lastName').value : '';
      const address = document.getElementById('address') ? document.getElementById('address').value : '';
      const country = document.getElementById('country') ? document.getElementById('country').value : '';
      const messageElement = document.getElementById('message');
      const message = messageElement ? messageElement.value : 'No message';
      
      if (!firstName || !emailAddress) {
        alert('Please fill out all required fields.');
        return;
      }
      
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailAddress)) {
        alert('Please enter a valid email address.');
        return;
      }

      try {
        const response = await fetch('includes/submit_contact.php', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({firstName, lastName, emailAddress, address, country, message})
        });
        const result = await response.json();
        if (result.success) {
          alert('Thank you for contacting us! We will get back to you soon.');
          contactForm.reset();
        } else {
          alert(result.message);
        }
      } catch (err) {
        alert('Network error. Failed to send message.');
      }
    });
  }

  // --- 3. Star Rating Logic (Contact & Dashboard) ---
  const ratingStars = document.querySelectorAll('.star-rating i');
  let currentRating = 0;

  if (ratingStars.length > 0) {
    ratingStars.forEach((star, index) => {
      star.addEventListener('mouseover', () => {
        resetStars();
        for (let i = 0; i <= index; i++) {
          ratingStars[i].classList.remove('fa-regular');
          ratingStars[i].classList.add('fa-solid');
        }
      });

      star.addEventListener('mouseout', () => {
        resetStars();
        setRating(currentRating);
      });

      star.addEventListener('click', () => {
        currentRating = index + 1;
        setRating(currentRating);
      });
    });

    function resetStars() {
      ratingStars.forEach(s => {
        s.classList.remove('fa-solid');
        s.classList.add('fa-regular');
        s.style.color = '';
      });
    }

    function setRating(rating) {
      for (let i = 0; i < rating; i++) {
        ratingStars[i].classList.remove('fa-regular');
        ratingStars[i].classList.add('fa-solid');
        ratingStars[i].style.color = '#ffc107'; // yellow
      }
    }
  }

  // --- 4. Dynamic Quiz Logic (Quiz Page) ---
  const questionText = document.getElementById('questionText');
  const optionsContainer = document.getElementById('optionsContainer');
  const questionCounter = document.getElementById('questionCounter');
  const questionCounterRight = document.getElementById('questionCounterRight');
  const questionIndicators = document.getElementById('questionIndicators');
  const btnNext = document.getElementById('btnNext');
  const btnBack = document.getElementById('btnBack');
  const btnSkip = document.getElementById('btnSkip');
  const btnSubmit = document.getElementById('btnSubmit');

  const quizCategoryHeader = document.getElementById('quizCategoryHeader');
  const activeQuizTitleLeft = document.getElementById('activeQuizTitleLeft');
  const activeQuizTitleRight = document.getElementById('activeQuizTitleRight');
  const quizGalleryItems = document.querySelectorAll('.quiz-gallery-item');

  if (questionText && optionsContainer && typeof quizData !== 'undefined') {
    
    // Parse URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    let categoryKey = urlParams.get('category') || 'sports'; // default to sports
    
    if(!quizData[categoryKey]) categoryKey = 'sports'; // fallback

    const categoryData = quizData[categoryKey];
    if(quizCategoryHeader) quizCategoryHeader.innerText = categoryData.title;

    let activeSubQuizIndex = 0;
    let currentQuestionIndex = 0;
    let score = 0;
    let currentQuizQuestions = categoryData.quizzes[activeSubQuizIndex];
    let userAnswers = new Array(currentQuizQuestions.length).fill(null);

    function initQuiz(subQuizIndex) {
      activeSubQuizIndex = subQuizIndex;
      currentQuizQuestions = categoryData.quizzes[activeSubQuizIndex];
      userAnswers = new Array(currentQuizQuestions.length).fill(null);
      currentQuestionIndex = 0;
      score = 0;

      // Update titles
      const quizName = `Quiz 0${activeSubQuizIndex + 1}`;
      if(activeQuizTitleLeft) activeQuizTitleLeft.innerText = quizName;
      if(activeQuizTitleRight) activeQuizTitleRight.innerText = quizName;

      // Update gallery active state
      quizGalleryItems.forEach((item, idx) => {
        if(idx === activeSubQuizIndex) {
          item.className = "quiz-gallery-item border border-info border-2 text-center py-2 mb-3 fw-bold";
          item.style.color = "#008f9e";
        } else {
          item.className = "quiz-gallery-item border border-dark text-center py-2 mb-3 text-muted";
          item.style.color = "";
        }
      });

      renderQuestion(currentQuestionIndex);
      updateIndicators();
    }

    // Set up gallery clicks
    quizGalleryItems.forEach(item => {
      item.addEventListener('click', (e) => {
        saveAnswer(); // save current before switching
        const idx = parseInt(e.target.getAttribute('data-index'));
        initQuiz(idx);
      });
    });

    function renderQuestion(index) {
      const qData = currentQuizQuestions[index];
      // Format index as 01, 02, etc.
      const displayNum = (index + 1).toString().padStart(2, '0');
      questionText.innerText = `Q.${displayNum} ${qData.q}`;
      questionCounter.innerText = `${index + 1}/${currentQuizQuestions.length}`;
      if (questionCounterRight) questionCounterRight.innerText = `${index + 1}/${currentQuizQuestions.length}`;

      optionsContainer.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];

      qData.options.forEach((opt, idx) => {
        const isChecked = userAnswers[index] === idx ? 'checked' : '';
        const html = `
          <div class="form-check mb-3 d-flex align-items-center">
            <input class="form-check-input border-dark border-2 me-3" type="radio" name="quizOption" id="option${idx}" value="${idx}" style="width: 1.25em; height: 1.25em;" ${isChecked}>
            <label class="form-check-label fs-5" for="option${idx}">${letters[idx]}. ${opt}</label>
          </div>
        `;
        optionsContainer.insertAdjacentHTML('beforeend', html);
      });
    }

    function saveAnswer() {
      const selected = document.querySelector('input[name="quizOption"]:checked');
      if (selected) {
        userAnswers[currentQuestionIndex] = parseInt(selected.value);
      }
    }

    function updateIndicators() {
      if (!questionIndicators) return;
      questionIndicators.innerHTML = '';
      for (let i = 0; i < currentQuizQuestions.length; i++) {
        const isCurrent = (i === currentQuestionIndex);
        const hasAnswered = (userAnswers[i] !== null);
        
        let borderClass = 'border-dark border-1';
        let bgClass = '';
        
        if (isCurrent) {
          borderClass = 'border-info border-2';
        } else if (hasAnswered) {
          borderClass = 'border-dark border-2';
          bgClass = 'bg-secondary';
        }

        const circle = `<div class="rounded-circle border ${borderClass} ${bgClass}" style="width: 25px; height: 25px; cursor: pointer;" data-nav="${i}"></div>`;
        questionIndicators.insertAdjacentHTML('beforeend', circle);
      }
      
      // Allow clicking indicators to jump to questions
      const circles = questionIndicators.querySelectorAll('.rounded-circle');
      circles.forEach(circle => {
        circle.addEventListener('click', (e) => {
          saveAnswer();
          currentQuestionIndex = parseInt(e.target.getAttribute('data-nav'));
          renderQuestion(currentQuestionIndex);
          updateIndicators();
        });
      });
    }

    btnNext.addEventListener('click', () => {
      saveAnswer();
      if (currentQuestionIndex < currentQuizQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion(currentQuestionIndex);
        updateIndicators();
      }
    });

    btnBack.addEventListener('click', () => {
      saveAnswer();
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion(currentQuestionIndex);
        updateIndicators();
      }
    });

    btnSkip.addEventListener('click', () => {
      if (currentQuestionIndex < currentQuizQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion(currentQuestionIndex);
        updateIndicators();
      }
    });

    btnSubmit.addEventListener('click', () => {
      saveAnswer();
      score = 0;
      userAnswers.forEach((ans, idx) => {
        if (ans !== null && ans === currentQuizQuestions[idx].correct) {
          score++;
        }
      });
      localStorage.setItem('quizScore', score);
      localStorage.setItem('quizTotal', currentQuizQuestions.length);
      window.location.href = 'result.html';
    });

    // Start default
    initQuiz(0);
  }

  // --- 5. Result Page Logic (Result Page) ---
  const finalCoinsDisplay = document.getElementById('finalCoinsDisplay');
  const resultStarsRating = document.getElementById('resultStarsRating');

  if (finalCoinsDisplay && resultStarsRating) {
    const score = parseInt(localStorage.getItem('quizScore')) || 0;
    const total = parseInt(localStorage.getItem('quizTotal')) || 5;
    
    // Calculate new coins and stars
    const coinsEarned = score * 50; 
    const baseCoins = 1000;
    const totalCoins = baseCoins + coinsEarned;
    
    finalCoinsDisplay.innerText = `Your Coins : ${totalCoins}$`;
    
    // Display stars based on score
    resultStarsRating.innerHTML = '';
    const starsEarned = Math.round((score / total) * 5);
    
    for (let i = 0; i < 5; i++) {
      if (i < starsEarned) {
        resultStarsRating.innerHTML += `<i class="fa-solid fa-star text-warning me-1"></i>`;
      } else {
        resultStarsRating.innerHTML += `<i class="fa-regular fa-star text-dark me-1"></i>`;
      }
    }
  }

  // --- 6. Dashboard User Logic (Dashboard Page) ---
  const dbUserName = document.getElementById('dbUserName');
  const dbUserEmail = document.getElementById('dbUserEmail');
  const dbUserHandle = document.getElementById('dbUserHandle');
  const dbUserJoined = document.getElementById('dbUserJoined');
  const navUserName = document.getElementById('navUserName');
  
  // New Extra Fields
  const dbUserPhone = document.getElementById('dbUserPhone');
  const dbUserLocation = document.getElementById('dbUserLocation');
  const dbUserDegree = document.getElementById('dbUserDegree');
  const dbUserUni = document.getElementById('dbUserUni');
  const dbUserJob = document.getElementById('dbUserJob');
  
  if (dbUserName) {
    // Check if user exists in localStorage
    const savedUserStr = localStorage.getItem('quizzerUser');
    let user = null;
    
    if (savedUserStr) {
      try {
        user = JSON.parse(savedUserStr);
      } catch(e){}
    }
    
    // Fallback if no user is saved yet
    if (!user) {
      // You can implement actual Login logic later saving to localStorage!
      user = {
        name: "Pradeep Kamalan",
        email: "pradeep.k@example.com",
        handle: "Quizzer.com/pradeepk",
        joined: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        phone: "+94 77 123 4567",
        location: "Colombo, Sri Lanka",
        degree: "BSc. Computer Science",
        university: "University of Colombo",
        job: "Senior React Developer"
      };
    }
    
    // Inject the data into the DOM!
    dbUserName.innerText = user.name;
    dbUserEmail.innerText = user.email;
    if (dbUserHandle) dbUserHandle.innerText = user.handle || ("Quizzer.com/" + user.name.replace(/\s+/g, '').toLowerCase());
    if (dbUserJoined) dbUserJoined.innerText = "Joined: " + (user.joined || "Recently");
    if (navUserName) navUserName.innerText = user.name;
    
    // Inject New Extra Fields
    if (dbUserPhone) dbUserPhone.innerText = user.phone || "Not Provided";
    if (dbUserLocation) dbUserLocation.innerText = user.location || "Not Provided";
    if (dbUserDegree) dbUserDegree.innerText = user.degree || "Not Provided";
    if (dbUserUni) dbUserUni.innerText = user.university || "Not Provided";
    if (dbUserJob) dbUserJob.innerText = user.job || "Avid Learner";
  }

});
