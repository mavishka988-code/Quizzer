<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quizzer - Dashboard</title>
  <!-- Bootstrap 5 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <!-- Custom CSS -->
  <link rel="stylesheet" href="css/style.css?v=2" />
</head>

<body class="dark-theme">
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-custom sticky-top">
    <div class="container">
      <a class="navbar-brand" href="index.php">
        <i class="fa-solid fa-shapes text-primary"></i> Quizzer
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="index.php">Home</a></li>
          <li class="nav-item"><a class="nav-link active" href="dashboard.php">DashBoard</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.php">Contact Us</a></li>
        </ul>
      </div>
      <div class="d-none d-lg-flex">
        <a href="login.html" class="profile-icon text-decoration-none" style="color: #00d4ff;">
          <i class="fa-regular fa-circle-user"></i>
          <span id="navUserName">My Profile</span>
        </a>
      </div>
    </div>
  </nav>

  <div
    style="background: linear-gradient(135deg, #000c24 0%, #021a3e 50%, #032241 100%); padding: 50px 0; border-bottom: 2px solid rgba(0, 212, 255, 0.3); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); margin-bottom: 40px;">
    <div class="container fade-in">
      <!-- Top Details Section -->
      <div class="row">
        <div class="col-lg-8">

          <!-- Personal Details Box -->
          <div class="glass-card mb-4 p-4 row align-items-center g-3 rounded-4" style="border: 2px solid #e1e9ed">
            <div class="col-md-3 text-center">
              <i class="fa-regular fa-circle-user mb-3" style="font-size: 7rem; color: #00d4ff !important;"></i>
              <br>
              <span
                class="badge bg-success bg-opacity-10 text-success border border-success border-opacity-50 px-3 py-2 rounded-pill"><i
                  class="fa-solid fa-crown me-1"></i> Pro Member</span>
            </div>
            <div class="col-md-9 text-light">
              <h3 class="fw-bold mb-3 text-glow" id="dbUserName">Personal Details...</h3>

              <div class="row mb-3 gx-4">
                <div class="col-sm-6">
                  <p class="text-muted small mb-2"><i class="fa-solid fa-envelope me-2" style="color: #00d4ff;"></i>
                    <span class="text-black" id="dbUserEmail">loading@mail.com</span>
                  </p>
                  <p class="text-muted small mb-2"><i class="fa-solid fa-phone me-2" style="color: #00d4ff;"></i> <span
                      class="text-black" id="dbUserPhone">+94 77 000 0000</span></p>
                  <p class="text-muted small mb-2"><i class="fa-solid fa-location-dot me-2" style="color: #00d4ff;"></i>
                    <span class="text-black" id="dbUserLocation">Colombo, Sri Lanka</span>
                  </p>
                </div>
                <div class="col-sm-6 mt-2 mt-sm-0">
                  <p class="text-muted small mb-2"><i class="fa-solid fa-graduation-cap me-2"
                      style="color: #00d4ff;"></i>
                    <span class="text-black" id="dbUserDegree">BSc. Information Technology</span>
                  </p>
                  <p class="text-muted small mb-2"><i class="fa-solid fa-building-columns me-2"
                      style="color: #00d4ff;"></i> <span class="text-black" id="dbUserUni">University of Colombo</span>
                  </p>
                  <p class="text-muted small mb-2"><i class="fa-solid fa-briefcase me-2" style="color: #00d4ff;"></i>
                    <span class="text-black" id="dbUserJob">Avid Learner & Quiz Enthusiast</span>
                  </p>
                </div>
              </div>

              <div class="d-flex flex-wrap gap-2 mb-3">
                <span
                  class="badge bg-primary text-dark bg-opacity-75 px-3 py-2 border border-info border-opacity-50 text-white"><i
                    class="fa-solid fa-fire me-1" style="color: #ff9800;"></i> 12 Day Streak</span>
                <span
                  class="badge bg-success text-dark bg-opacity-75 px-3 py-2 border border-success border-opacity-50 text-white"><i
                    class="fa-solid fa-check-double me-1"></i> 85% Accuracy</span>
                <span
                  class="badge bg-warning text-dark bg-opacity-75 px-3 py-2 border border-warning border-opacity-50 text-white"><i
                    class="fa-solid fa-medal me-1"></i> Top 5% Rank</span>
              </div>

              <div class="d-flex justify-content-between text-muted pt-3 mt-1"
                style="border-top: 1px dashed rgba(255,255,255,0.2); font-size: 0.8rem; font-weight: 600;">
                <span id="dbUserHandle" style="color: #00d4ff;">Quizzer.com/User</span>
                <span id="dbUserJoined">Joined: Today</span>
                <span>Last Visit: Just now</span>
              </div>
            </div>
          </div>

          <!-- Coins and Progress Box -->
          <div class="glass-card p-4 row align-items-center g-3 rounded-4 shadow-sm" style="background: linear-gradient(135deg, rgba(255, 243, 204, 0.9) 0%, rgba(255, 224, 130, 0.6) 100%); border: 2px solid #ffca28;">
            <div class="col-md-4 text-center border-end border-warning">
              <div class="d-flex align-items-center justify-content-center">
                <div class="border rounded-circle p-2 me-3" style="border-width:2px !important;">
                  <i class="fa-brands fa-btc fs-3 text-muted"></i>
                </div>
                <div class="text-start">
                  <h4 class="fw-bold mb-0">Coins : 587</h4>
                  <a href="#" class="text-muted small text-decoration-none">Details</a>
                </div>
              </div>
            </div>
            <div class="col-md-5 px-4">
              <div class="text-muted small fw-bold mb-1">Your progress</div>
              <div class="progress mb-2" style="height: 10px; border-radius: 0;">
                <div class="progress-bar bg-dark" role="progressbar" style="width: 25%" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="text-muted small fw-bold mb-1 mt-3">Star points:</div>
              <div class="text-secondary fs-5">
                <i class="fa-solid fa-star text-dark"></i>
                <i class="fa-solid fa-star text-dark"></i>
                <i class="fa-solid fa-star text-dark"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
            <div class="col-md-3 text-center">
              <i class="fa-solid fa-trophy fs-1" style="color: #6c757d;"></i>
              <div class="small fw-bold text-muted mt-2">Gold</div>
            </div>
          </div>

        </div>
        <!-- Tall placeholder Image right -->
        <div class="col-lg-4 mt-4 mt-lg-0">
          <img src="images/men.jpg" class="img-fluid rounded-4 shadow-sm w-100"
            style="height: 100%; min-height: 350px; object-fit: cover;" alt="Statistics">
        </div>
      </div><!-- End Row -->
    </div>
  </div>

  <div class="container py-2 fade-in">
    <!-- Quiz Categories Section -->
    <h3 class="fw-bold mb-4 border-bottom border-dark border-2 d-inline-block pb-1">Quiz Categories</h3>

    <div class="row flex-nowrap overflow-auto pb-4 mb-5" style="column-gap: 15px;">
      <!-- Category Item -->
      <div class="col-10 col-sm-6 col-md-4 col-lg-2">
        <div
          class="glass-card text-center d-flex flex-column justify-content-between h-100 p-3 pt-4 rounded-4 shadow-sm"
          style="background-color: #e0f7fa; border: 1px solid #b2ebf2;">
          <i class="fa-solid fa-futbol fs-1 mb-3" style="color: #00acc1;"></i>
          <h5 class="mb-4" style="color: #006064;">Sports</h5>
          <a href="quiz.html?category=sports" class="btn btn-outline-custom w-100" style="border-radius: 0;">Start</a>
        </div>
      </div>
      <!-- Category Item -->
      <div class="col-10 col-sm-6 col-md-4 col-lg-2">
        <div
          class="glass-card text-center d-flex flex-column justify-content-between h-100 p-3 pt-4 rounded-4 shadow-sm"
          style="background-color: #e8f5e9; border: 1px solid #c8e6c9;">
          <i class="fa-solid fa-compass-drafting fs-1 mb-3" style="color: #43a047;"></i>
          <h5 class="mb-4" style="color: #1b5e20;">Maths</h5>
          <a href="quiz.html?category=maths" class="btn btn-outline-custom w-100" style="border-radius: 0;">Start</a>
        </div>
      </div>
      <!-- Category Item -->
      <div class="col-10 col-sm-6 col-md-4 col-lg-2">
        <div
          class="glass-card text-center d-flex flex-column justify-content-between h-100 p-3 pt-4 rounded-4 shadow-sm"
          style="background-color: #fff3e0; border: 1px solid #ffe0b2;">
          <i class="fa-solid fa-building-columns fs-1 mb-3" style="color: #fb8c00;"></i>
          <h5 class="mb-4" style="color: #e65100;">History</h5>
          <a href="quiz.html?category=history" class="btn btn-outline-custom w-100" style="border-radius: 0;">Start</a>
        </div>
      </div>
      <!-- Category Item -->
      <div class="col-10 col-sm-6 col-md-4 col-lg-2">
        <div
          class="glass-card text-center d-flex flex-column justify-content-between h-100 p-3 pt-4 rounded-4 shadow-sm"
          style="background-color: #f3e5f5; border: 1px solid #e1bee7;">
          <i class="fa-brands fa-android fs-1 mb-3" style="color: #8e24aa;"></i>
          <h5 class="mb-4" style="color: #4a148c;">Technology</h5>
          <a href="quiz.html?category=tech" class="btn btn-outline-custom w-100" style="border-radius: 0;">Start</a>
        </div>
      </div>
      <!-- Category Item -->
      <div class="col-10 col-sm-6 col-md-4 col-lg-2">
        <div
          class="glass-card text-center d-flex flex-column justify-content-between h-100 p-3 pt-4 rounded-4 shadow-sm"
          style="background-color: #fffde7; border: 1px solid #fff59d;">
          <i class="fa-solid fa-microscope fs-1 mb-3" style="color: #fbc02d;"></i>
          <h5 class="mb-4" style="color: #f57f17;">Biology</h5>
          <a href="quiz.html?category=biolo" class="btn btn-outline-custom w-100" style="border-radius: 0;">Start</a>
        </div>
      </div>
      <!-- Category Item -->
      <div class="col-10 col-sm-6 col-md-4 col-lg-2">
        <div
          class="glass-card text-center d-flex flex-column justify-content-between h-100 p-3 pt-4 rounded-4 shadow-sm"
          style="background-color: #ffebee; border: 1px solid #ffcdd2;">
          <i class="fa-solid fa-camera-retro fs-1 mb-3" style="color: #e53935;"></i>
          <h5 class="mb-4" style="color: #b71c1c;">Movies</h5>
          <a href="quiz.html?category=movies" class="btn btn-outline-custom w-100" style="border-radius: 0;">Start</a>
        </div>
      </div>
    </div>

    <!-- Easy Quizz Game Section -->
    <h3 class="fw-bold mb-4 pb-1">Easy Quizz Game:</h3>
    <div class="row g-4 mb-5">
      <!-- Easy Game 1 -->
      <div class="col-sm-6 col-lg-3 text-center">
        <img src="images/game01.jpg" class="img-fluid bg-white border mb-3 w-100"
          style="height: 250px; object-fit: cover; border-radius: 8px;" alt="Simple Quiz Game">
        <div class="d-flex align-items-center justify-content-between px-2">
          <span class="fw-bold small">Rate</span>
          <div class="text-secondary small">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
        </div>
      </div>
      <!-- Easy Game 2 -->
      <div class="col-sm-6 col-lg-3 text-center">
        <img src="images/game02.png" class="img-fluid bg-white border mb-3 w-100"
          style="height: 250px; object-fit: cover; border-radius: 8px;" alt="Simple Quiz Game">
        <div class="d-flex align-items-center justify-content-between px-2">
          <span class="fw-bold small">Rate</span>
          <div class="text-secondary small">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
        </div>
      </div>
      <!-- Easy Game 3 -->
      <div class="col-sm-6 col-lg-3 text-center">
        <img src="images/game03.jpg" class="img-fluid bg-white border mb-3 w-100"
          style="height: 250px; object-fit: cover; border-radius: 8px;" alt="Simple Quiz Game">
        <div class="d-flex align-items-center justify-content-between px-2">
          <span class="fw-bold small">Rate</span>
          <div class="text-secondary small">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
        </div>
      </div>
      <!-- Easy Game 4 -->
      <div class="col-sm-6 col-lg-3 text-center">
        <img src="images/game04jpg.jpg" class="img-fluid bg-white border mb-3 w-100"
          style="height: 250px; object-fit: cover; border-radius: 8px;" alt="Simple Quiz Game">
        <div class="d-flex align-items-center justify-content-between px-2">
          <span class="fw-bold small">Rate</span>
          <div class="text-secondary small">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
        </div>
      </div>
    </div>

  </div> <!-- Container End -->

  <!-- Footer -->
  <footer class="footer-custom-new mt-auto pt-5 pb-3">
    <div class="container">
      <div class="row text-white mb-5">
        <div class="col-6 col-md-2 mb-4">
          <h5 class="fw-bold mb-4">Features</h5>
          <ul class="list-unstyled footer-links">
            <li><a href="#">Overview</a></li>
            <li><a href="#">AI presentation</a></li>
            <li><a href="#">Live polling</a></li>
            <li><a href="#">Word cloud</a></li>
            <li><a href="#">Quiz</a></li>
            <li><a href="#">Q&A</a></li>
            <li><a href="#">Survey</a></li>
            <li><a href="#">Presentations</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-3 mb-4">
          <h5 class="fw-bold mb-4">Resources</h5>
          <ul class="list-unstyled footer-links">
            <li><a href="#">Blog</a></li>
            <li><a href="#">How to</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Templates</a></li>
            <li><a href="#">Academy</a></li>
            <li><a href="#">Webinars</a></li>
            <li><a href="#">Comparison</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#">Integrations</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-2 mb-4">
          <h5 class="fw-bold mb-4">Details</h5>
          <ul class="list-unstyled footer-links">
            <li><a href="#">Legal</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Requirements</a></li>
            <li><a href="#">AI at Quizzer</a></li>
            <li><a href="#">Cookie preferences</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-2 mb-4">
          <h5 class="fw-bold mb-4">About us</h5>
          <ul class="list-unstyled footer-links">
            <li><a href="#">Press info</a></li>
            <li><a href="#">The team</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Culture</a></li>
            <li><a href="#">Benefits</a></li>
            <li><a href="contact.php">Contact us</a></li>
            <li><a href="#">Climate</a></li>
            <li><a href="#">Investors</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-3 mb-4">
          <h5 class="fw-bold mb-4">Choose your language</h5>
          <button class="btn btn-light rounded-pill px-4 py-2 mb-4 fw-bold shadow-sm">English <i
              class="fa-solid fa-chevron-down ms-2"></i></button>

          <h5 class="fw-bold mb-4">Connect with us!</h5>
          <div class="d-flex gap-2 social-box-icons mt-2">
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-tiktok"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <!-- Big Logo -->
      <div class="text-start text-md-center mb-0">
        <h1 class="font-heading fw-bold text-white huge-logo">Q u i z z e r</h1>
      </div>

      <!-- Bottom bar -->
      <div
        class="d-flex flex-column flex-md-row justify-content-between border-top border-light border-opacity-50 pt-3 text-white-50 mt-1 small">
        <div>(c) 2026 Quizzer. All rights reserved.</div>
        <div class="mt-2 mt-md-0 d-flex gap-3">
          <a href="#" class="text-white-50 text-decoration-none hover-white">Privacy</a>
          <a href="#" class="text-white-50 text-decoration-none hover-white">Terms and Conditions</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Bootstrap & Main Script -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="js/script.js"></script>
</body>

</html>