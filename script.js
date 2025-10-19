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
