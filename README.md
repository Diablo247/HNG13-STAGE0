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
├── index.html # Main HTML file
├── style.css # All styling (layout, animations, responsiveness)
├── script.js # Handles live clock and date
├── media/ # Folder containing images/icons
│ ├── hngimg.jpg
│ ├── github.png
│ ├── linkedin.png
│ └── x.png
└── README.md # Project documentation (this file)



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
