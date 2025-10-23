# 🪪 Profile Card — Vanilla JS

A clean and minimal **profile card** built with **HTML, CSS, and Vanilla JavaScript**, featuring:

- A live **clock** and **date** display  
- **blobs** for background   
- **Barlow Condensed font**  
- Subtle **3D hover shadows**  
- **Keyboard-navigable** social links  
-  **responsive** layout  

---

## 🧱 Project Structure

project-folder/
│
├── index.html              
├── aboutMe.html             
├── contactMe.html            
│
├── style.css              
├── script.js 
├── media/ # Folder containing images/icons
│ ├── hngimg.jpg
│ ├── github.png
│ ├── linkedin.png
│ └── x.png
|
└── README.md # Project documentation (this file)


This project update builds on the **Stage 0 Profile Card**, expanding it into a **multi-page web application** with two additional pages:
- **Contact Us** — a validated, accessible contact form.
- **About Me** — a reflective page sharing insights, goals, and self-notes.

All pages follow semantic HTML5 standards, include accessibility features, and are fully responsive.

---

## 🧩 Pages Overview

### 🏠 index.html — Profile Card (Stage 0)
Displays:
- User name, avatar, bio
- Hobbies and dislikes
- Dynamic time and date
- Social links (keyboard-accessible)

---

### 💬 contact.html — Contact Us Page

A simple contact form with validation.

#### Required Fields
| Field | data-testid |
|-------|--------------|
| Full Name | `test-contact-name` |
| Email | `test-contact-email` |
| Subject | `test-contact-subject` |
| Message | `test-contact-message` |
| Submit Button | `test-contact-submit` |

#### Validation
- All fields **required**
- Email must be valid (`name@example.com`)
- Message must be at least **10 characters**
- Show error messages below inputs (`test-contact-error-<field>`)
- On valid submission → show success message (`test-contact-success`)
- All inputs linked to `<label>` and `aria-describedby` for accessibility

---

### 👤 about.html — About Me Page

A structured reflective page.

| Section | data-testid |
|----------|-------------|
| Bio | `test-about-bio` |
| Goals | `test-about-goals` |
| Low Confidence Areas | `test-about-confidence` |
| Note to Future Self | `test-about-future-note` |
| Extra Thoughts | `test-about-extra` |

#### Semantic Structure
```html
<main data-testid="test-about-page">
  <section data-testid="test-about-bio">...</section>
  <section data-testid="test-about-goals">...</section>
  <section data-testid="test-about-confidence">...</section>
  <section data-testid="test-about-future-note">...</section>
  <section data-testid="test-about-extra">...</section>
</main>





## ⚙️ How to Run Locally

- **Download or Clone**
   ```bash
   git clone https://github.com/yourusername/profile-card.git
   cd profile-card
Run Locally

- Option 1:Simply open index.html in your browser.

- Option 2: Use a local server:
   ```bash
   npx serve
Visit → http://localhost:3000


## Important Notes------------------

Font Loading Optimization
To prevent a flash of unstyled text (FOUT), preload your Google Font:

<link rel="preload"
      href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600&display=swap"
      as="style"
      onload="this.rel='stylesheet'">


Performance Tip
If you notice CPU usage spikes, change your setInterval(updateClock, 1)
in script.js to setInterval(updateClock, 100).

Accessibility
All links are focusable and support arrow-key navigation.
Tested with Chrome and keyboard navigation standards.



Author--------
David Adams
Frontend Developer | UI/UX Enthusiast | Backend Developer
Building accessible, responsive, and delightful web experiences.

© 2025 David Adams. All rights reserved.
