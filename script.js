document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro-screen");
  const main = document.getElementById("main-content");

  document.body.classList.add("intro-active");

  if (intro) {
    intro.addEventListener("click", () => {
      intro.classList.add("fade-out");

      setTimeout(() => {
        intro.style.display = "none";
        main.classList.remove("hidden");
        document.body.classList.remove("intro-active");
      }, 1000);
    });
  }
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  const isOpen = sidebar.classList.contains("open");

  if (isOpen) {
    sidebar.classList.remove("open");
    overlay.classList.remove("visible");
  } else {
    sidebar.classList.add("open");
    overlay.classList.add("visible");
  }
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.remove("open");
  overlay.classList.remove("visible");
}

function toggleDetails() {
  const details = document.getElementById("details-section");
  details.classList.toggle("visible");
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  sidebar.classList.toggle("open");
  overlay.classList.toggle("visible");
}
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("visible");
}
