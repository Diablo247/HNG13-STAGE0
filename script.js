/*------------------------------------------------------ nav-bar */
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-item").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
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
// =============================
// CONTACT FORM VALIDATION LOGIC
// =============================

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return; // Exit if not on contact page

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const subjectInput = document.getElementById("contact-subject");
  const messageInput = document.getElementById("contact-message");
  const successMsg = document.getElementById("contact-success");

  const errorName = document.getElementById("error-contact-name");
  const errorEmail = document.getElementById("error-contact-email");
  const errorSubject = document.getElementById("error-contact-subject");
  const errorMessage = document.getElementById("error-contact-message");

  // Utility: show error message
  function showError(input, errorField, message) {
    input.setAttribute("aria-invalid", "true");
    errorField.textContent = message;
  }

  // Utility: clear error
  function clearError(input, errorField) {
    input.removeAttribute("aria-invalid");
    errorField.textContent = "";
  }

  // Validate email with regex
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Clear previous messages
    successMsg.textContent = "";
    successMsg.classList.add("hidden");

    // Validate name
    if (!nameInput.value.trim()) {
      showError(nameInput, errorName, "Full name is required.");
      isValid = false;
    } else {
      clearError(nameInput, errorName);
    }

    // Validate email
    if (!emailInput.value.trim()) {
      showError(emailInput, errorEmail, "Email is required.");
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, errorEmail, "Please enter a valid email address.");
      isValid = false;
    } else {
      clearError(emailInput, errorEmail);
    }

    // Validate subject
    if (!subjectInput.value.trim()) {
      showError(subjectInput, errorSubject, "Subject is required.");
      isValid = false;
    } else {
      clearError(subjectInput, errorSubject);
    }

    // Validate message
    if (!messageInput.value.trim()) {
      showError(messageInput, errorMessage, "Message is required.");
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      showError(
        messageInput,
        errorMessage,
        "Message must be at least 10 characters."
      );
      isValid = false;
    } else {
      clearError(messageInput, errorMessage);
    }

    // If valid, show success
    if (isValid) {
      successMsg.textContent = "Message sent successfully! Thank you.";
      successMsg.classList.remove("hidden");
      form.reset();
    }
  });
});
