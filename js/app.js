let celdaDBW = document.getElementById("donbosco-w");
celdaDBW.textContent = 5;

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.createElement('div');
  hamburger.className = 'hamburger';
  hamburger.innerHTML = '☰';
  hamburger.style.display = 'none';

  const navBar = document.querySelector('.nav-bar');
  navBar.appendChild(hamburger);

  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Mostrar/ocultar hamburguesa en móviles
  function updateMenu() {
    if (window.innerWidth <= 768) {
      hamburger.style.display = 'block';
      navLinks.style.display = 'none';
    } else {
      hamburger.style.display = 'none';
      navLinks.style.display = 'flex';
    }
  }

  window.addEventListener('resize', updateMenu);
  updateMenu();
});