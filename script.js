// Efeito de digitação no título
const heroTitle = document.querySelector('#hero h1');
const text = "Olá, eu sou [Seu Nome]";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    heroTitle.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Velocidade da digitação
  }
}

typeWriter();

// Esconder o loader após o carregamento
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1000); // Tempo de exibição do loader (1 segundo)
  });

  // Efeito de Parallax
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax-background');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Ajuste a velocidade do parallax
  });

  // Rolagem suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Menu Responsivo
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuIcon.classList.toggle('open');
});