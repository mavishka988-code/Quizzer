# 🎓 Quizzer - Premium Interactive Web Quiz Platform

Welcome to **Quizzer**! This is a dynamic, modern web-based quiz and interactive learning platform designed for seamless interactions, complete with secure authentication and aesthetic user interfaces.

## 📂 Project Structure

This project has been meticulously structured to adhere to best-practice development guidelines:

```text
Quizzer_Project/
│── css/
│   └── style.css            # Custom styling and animations
│── js/
│   ├── script.js            # Core event listeners & frontend logic
│   └── quiz-data.js         # JSON-structured Quiz datasets & questions
│── images/                  # High-quality UI graphics and assets
│── includes/
│   ├── db.php               # PDO Database configuration & connection
│   ├── functions.php        # Helper utilities and data sanitization
│   ├── submit_contact.php   # Backend Logic: Processing form data into DB
│   └── view_contacts.php    # Mini Administrative Dashboard for viewing messages
│── auth/
│   ├── register.php         # Creates new users securely (Password hashing)
│   ├── login.php            # Validates credentials & creates Sessions
│   ├── logout.php           # Safely completely terminates user Sessions
│   └── auth_check.php       # Protected-route security verification
│── index.php                # Landing and Home Interface
│── dashboard.php            # Secure User Dashboard & Activity Stats
│── quiz.html                # The Main Interactive Dynamic Quiz UI
│── result.html              # Final Score & Trophy Interface
│── contact.php              # User Contact Form (HTML UI)
│── README.md                # Project details and setup instructions
│── database.sql             # Full MySQL initialization schema representation
```

---

## 🚀 Setup & Installation

1. Start your **Apache** and **MySQL** services (using XAMPP, WAMP, etc). 
   *(Note: The `includes/db.php` file currently specifically targets **Port 3307** by design. Modify the port inline if your database runs on the default `3306`).*
2. Ensure you have created a database instance in phpMyAdmin, or run the provided `database.sql` directly into MySQL to instantiate the `Quizzer` schema, which includes the `users` and `contacts` data tables.
3. Place this entire directory into your root web server directory (`htdocs` for XAMPP).
4. Launch the application in your browser: `http://localhost/Quizzer_Project/index.php`.

---

## ✨ Core Features & Technical Implementations

- **Security & Authentication Flow:**
  - Employs PHP session state management strictly controlling access to specific routes.
  - Secures database credentials utilizing `PDO` with absolute prevention of SQL Injections via heavily prepared statements. 
  - Password entries are cryptographically hashed upon registration using the native `password_hash()` API.
  
- **Dynamic Vanilla JavaScript Engine:**
  - Implements lightweight "Single Page Application" (SPA) behavioral interactions. Quiz category parsing, answers tracking, and UI transitions perform flawlessly without page fragmentation.
  - Asynchronous JSON fetching cleanly bridges the separation between the HTML frontend and PHP backend modules.

- **Fully Realized Backend Integrations:**
  - Front-facing contact forms interface seamlessly with `submit_contact.php` to immediately organize inquiries into the persistent MySQL `contacts` table. 
  
- **Luxurious User Interfaces:**
  - Employs Glassmorphism (translucent, blurred cards floating upon gradient backgrounds).
  - Modern animations (hover-scaling components, interactive clicks, flowing linear gradient borders, animated CSS video placeholders).

---

## 📸 Snapshots

*Quizzer Dashboard Aesthetic Preview:*
![Dashboard Analytics Preview](images/analytics.avif)

*Premium Feature Introduction Graphics:*
![Feature Snippet](images/start-now.avif)

---

*(c) 2026 Quizzer Project Assignment Submission.*
