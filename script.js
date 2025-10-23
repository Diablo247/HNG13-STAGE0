/*------------------------------------------------------ nav-bar */
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");

    if (linkHref === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

    // Optional: update active state on click
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});

/*------------------------------------------------------ date and time */

function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = String(now.getMilliseconds()).padStart(3, "0");
  const formattedTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;

  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = now.toLocaleDateString("en-US", options);

  document.getElementById("clock").textContent = formattedTime;
  document.getElementById("date").textContent = formattedDate;
}

setInterval(updateClock, 1);
updateClock();

/*------------------------------------------------------ keyboard-arrow naigation */
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".social-links a");

  links.forEach((link, index) => {
    link.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const next = links[(index + 1) % links.length];
        next.focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prev = links[(index - 1 + links.length) % links.length];
        prev.focus();
      }
    });
  });
});

/*------------------------------------------------------ form validation*/

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset feedback
    feedback.classList.remove("error", "success", "show");
    feedback.textContent = "";

    // Collect values
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    // ✅ Fixed regex: no double backslashes
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate in order
    if (!name) return showFeedback("Please enter your full name.", "error");
    if (!email)
      return showFeedback("Please enter your email address.", "error");
    if (!emailPattern.test(email))
      return showFeedback("Please enter a valid email address.", "error");
    if (!subject) return showFeedback("Please enter a subject.", "error");
    if (!message) return showFeedback("Please enter your message.", "error");
    if (message.length < 10)
      return showFeedback(
        "Your message must be at least 10 characters long.",
        "error"
      );

    // ✅ All good
    showFeedback("Your message has been sent successfully!", "success");
    form.reset();
  });

  function showFeedback(msg, type) {
    feedback.textContent = msg;
    feedback.classList.add(type, "show");
  }
});
