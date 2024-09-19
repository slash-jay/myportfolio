function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Add this script to your JavaScript file or within a <script> tag

window.onload = function() {
  const aboutSection = document.getElementById('about');
  aboutSection.classList.add('visible'); // Add the class to trigger the animation
};
