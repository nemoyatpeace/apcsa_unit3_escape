document.addEventListener("DOMContentLoaded", () => {
  // Landing page -> Room 1
  const startBtn = document.getElementById("start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      window.location.href = "room1.html";
    });
  }

  // Room 1 -> Landing
  const backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // Room 1: password check
  const passwordBtn = document.getElementById("check-room1-word");
  if (passwordBtn) {
    passwordBtn.addEventListener("click", () => {
      const input = document.getElementById("room1-password");
      const feedback = document.getElementById("room1-feedback");
      const nextMsg = document.getElementById("room1-next");

      if (!input || !feedback || !nextMsg) return;

      const guess = input.value.trim().toUpperCase();

      nextMsg.classList.add("hidden");

      if (guess.length === 0) {
        feedback.textContent = "Type the 5-letter password built from your answers.";
        feedback.style.color = "#ffb347";
        return;
      }

      if (guess === "LIGHT") {
        feedback.textContent = "Correct! Your understanding of class structure is shining.";
        feedback.style.color = "#7CFC00";
        nextMsg.classList.remove("hidden");
        // Later we can redirect to room2.html here if you want:
        // window.location.href = "room2.html";
      } else {
        feedback.textContent = "That password is not quite right. Re-check each question and the letters you chose.";
        feedback.style.color = "#ff6b6b";
      }
    });
  }
});
