// ===== MENU MOBILE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animação do hambúrguer (opcional)
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
  });
}

// Fechar menu ao clicar em um link
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ===== SMOOTH SCROLL PARA LINKS INTERNOS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== CONTADORES ANIMADOS =====
const counters = document.querySelectorAll('.indicador-numero');
let animated = false;

function animateNumbers() {
  if (animated) return;
  
  const indicatorsSection = document.querySelector('#indicadores');
  if (!indicatorsSection) return;
  
  const sectionPosition = indicatorsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;
  
  if (sectionPosition < screenPosition - 100) {
    animated = true;
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      let current = 0;
      const increment = target / 50; // 50 passos
      
      const updateCounter = () => {
        if (current < target) {
          current += increment;
          if (target < 10) {
            counter.innerText = Math.ceil(current);
          } else {
            counter.innerText = Math.floor(current);
          }
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target;
        }
      };
      
      updateCounter();
    });
  }
}

// Detecta quando o usuário rola a página
window.addEventListener('scroll', animateNumbers);
window.addEventListener('load', animateNumbers);

// ===== BOTÕES INTERATIVOS =====
// Botão "Conheça cases"
const saibaMaisBtn = document.getElementById('saibaMaisBtn');
if (saibaMaisBtn) {
  saibaMaisBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('🌱 Em breve: Cases reais de sucesso em agricultura sustentável! Fique ligado.');
  });
}

// Botão "Quero saber mais" (footer)
const saibaMaisFooter = document.getElementById('saibaMaisFooter');
if (saibaMaisFooter) {
  saibaMaisFooter.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://www.gov.br/agricultura/pt-br/assuntos/sustentabilidade', '_blank');
  });
}

// Botão Newsletter
const newsletterBtn = document.getElementById('newsletterBtn');
if (newsletterBtn) {
  newsletterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = prompt('📧 Insira seu e-mail para receber nossa newsletter:', 'seuemail@exemplo.com');
    if (email && email.includes('@')) {
      alert(`✅ Obrigado! Enviaremos novidades sobre agro sustentável para ${email}`);
    } else if (email) {
      alert('❌ Por favor, insira um e-mail válido.');
    }
  });
}

// ===== EFEITO DE SCROLL PARA O HEADER =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.background = '#05260d';
    header.style.transition = 'background 0.3s';
  } else {
    header.style.background = '#0a2f14';
  }
});
