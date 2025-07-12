let celdaDBW = document.getElementById("donbosco-w");
celdaDBW.textContent = 5;

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});