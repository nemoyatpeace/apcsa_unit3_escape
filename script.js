document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      window.location.href = "room1.html";
    });
  }

  const backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
});
