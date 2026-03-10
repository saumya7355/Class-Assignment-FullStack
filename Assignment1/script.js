const toggleBtn = document.getElementById("toggleBtn");

// Check saved theme when page loads
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Save theme in localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});