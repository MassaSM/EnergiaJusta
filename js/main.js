/*Menu Mobile*/
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu__topo ul');
const icon = toggle.querySelector('i');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    icon.classList.replace('fa-bars', 'fa-xmark');
    toggle.setAttribute('aria-label', 'Fechar menu');
  } else {
    icon.classList.replace('fa-xmark', 'fa-bars');
    toggle.setAttribute('aria-label', 'Abrir menu');
  }
});

const links = document.querySelectorAll('.menu__topo ul li a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    const ul = this.closest('.menu__topo').querySelector('ul');
    
    if (ul.classList.contains('active')) {
      ul.classList.remove('active');
      icon.classList.replace('fa-xmark', 'fa-bars');
      toggle.setAttribute('aria-label', 'Abrir menu');
    }
  });
});

/*Link Menu*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const topPosition = target.offsetTop - 20; // Ajuste o 20 para mais ou menos espaço
        window.scrollTo({
          top: topPosition,
          behavior: 'smooth'
        });
      }
    });
  });

/*Link Banner*/
$(document).ready(function() {
    $('#btnLinkManifesto').on('click', function() {
      window.open('https://www.exemplo.com', '_blank', 'noopener,noreferrer');
    });
});