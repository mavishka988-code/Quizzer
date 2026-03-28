<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quizzer - Contact Us</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="css/style.css?v=2">
</head>

<body class="dark-theme d-flex flex-column min-vh-100">

  <nav class="navbar navbar-expand-lg navbar-custom sticky-top border-bottom border-dark border-1">
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
          <li class="nav-item"><a class="nav-link" href="dashboard.php">DashBoard</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
          <li class="nav-item"><a class="nav-link active" href="contact.php">Contact Us</a></li>
        </ul>
      </div>
      <div class="d-none d-lg-flex">
        <a href="login.html" class="profile-icon">
          <i class="fa-regular fa-circle-user"></i>
          <span>Log In</span>
        </a>
      </div>
    </div>
  </nav>

  <div class="flex-grow-1" style="background: linear-gradient(135deg, #000c24 0%, #001f4d 50%, #003366 100%);">
    <div class="container py-5 fade-in">
      <div class="row g-5">

        <!-- Contact Info Left Side -->
      <div class="col-lg-5">
        <div class="mb-5 d-flex align-items-center">
          <i class="fa-regular fa-circle-user fs-1 text-muted"></i>
          <i class="fa-regular fa-circle-user fs-1 text-muted mx-2"></i>
          <i class="fa-regular fa-circle-user fs-1 text-muted"></i>
        </div>

        <h1 class="display-5 fw-bold mb-4 text-glow" style="color: #00d4ff;">Contact Us</h1>
        <p class="text-white-50 mb-4 fs-6">Have a question about our platform, want to integrate Quizzer into your business, or simply want to say hi? We are here to help.</p>
        <p class="text-white-50 mb-5 fs-6">Our dedicated support team usually responds within 24 hours. Fill out the form or reach us directly using the details below.</p>

        <div class="d-flex align-items-center mb-4">
          <div
            class="glass-card rounded-circle p-2 me-3 shadow-lg d-flex align-items-center justify-content-center"
            style="width: 45px; height: 45px; border: 1px solid rgba(0,212,255,0.3);">
            <i class="fa-solid fa-at" style="color: #00d4ff;"></i>
          </div>
          <span class="fs-6 fw-bold text-light">quizzerweb5@gmail.com</span>
        </div>

        <div class="d-flex align-items-center mb-4">
          <div
            class="glass-card p-2 me-3 shadow-lg d-flex align-items-center justify-content-center"
            style="width: 45px; height: 45px; border-radius: 12px; border: 1px solid rgba(0,212,255,0.3);">
            <i class="fa-solid fa-phone" style="color: #00d4ff;"></i>
          </div>
          <span class="fs-6 fw-bold text-light">0112 456879 / 0112 777666</span>
        </div>
      </div>

      <!-- Contact Form Right Side -->
      <div class="col-lg-7">
        <div class="glass-card shadow-sm border border-dark border-1 rounded-0 p-5 p-md-5">
          <h2 class="fw-normal display-6 mb-2">We'd <span class="text-danger fw-bold">Love</span> to hear from You!</h2>
          <h2 class="fw-bold display-6 mb-5" style="color: #002244;">Let's Get In touch,</h2>

          <form id="contactForm">
            <div class="row g-4 mb-4">
              <div class="col-md-6">
                <label for="firstName" class="form-label fw-bold small">First Name:</label>
                <input type="text" class="form-control rounded-0 border-dark" id="firstName" required>
              </div>
              <div class="col-md-6">
                <label for="lastName" class="form-label fw-bold small">Last Name:</label>
                <input type="text" class="form-control rounded-0 border-dark" id="lastName">
              </div>
            </div>

            <div class="mb-4">
              <label for="emailAddress" class="form-label fw-bold small">Email Address:</label>
              <input type="email" class="form-control rounded-0 border-dark" id="emailAddress" required>
            </div>

            <div class="mb-4">
              <label for="address" class="form-label fw-bold small">Address:</label>
              <input type="text" class="form-control rounded-0 border-dark" id="address">
            </div>

            <div class="mb-4">
              <label for="country" class="form-label fw-bold small">country :</label>
              <input type="text" class="form-control rounded-0 border-dark" id="country">
            </div>

            <div class="mb-4">
              <label for="message" class="form-label fw-bold small">Message :</label>
              <textarea class="form-control rounded-0 border-dark" id="message" rows="5"></textarea>
            </div>

            <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between mt-4">
              <div class="mb-4 mb-md-0">
                <div class="star-rating fs-4 mb-2">
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-regular fa-star text-warning" style="cursor: pointer;"></i>
                  <i class="fa-regular fa-star text-warning" style="cursor: pointer;"></i>
                  <i class="fa-regular fa-star text-warning" style="cursor: pointer;"></i>
                  <i class="fa-regular fa-star text-warning" style="cursor: pointer;"></i>
                </div>
                <small class="fw-bold">Rate Your Vote Here</small>
              </div>

              <button type="submit"
                class="btn rounded-0 fw-bold px-5 py-2 text-white" style="background-color: #002244;">Submit</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
  </div>

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

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="js/script.js"></script>
</body>

</html>