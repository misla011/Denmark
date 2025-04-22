const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('card-hover');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('card-hover');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.1 
});

fadeInElements.forEach(element => {
  observer.observe(element);
});

document.getElementById("cadastro-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("primeironome").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmar-senha").value;

  // Validação da senha
  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem. Por favor, verifique.");
    return; // Impede o envio
  }

  // Se passou na validação
  document.getElementById("form-container").style.display = "none";

  const welcome = document.getElementById("welcome-message");
  welcome.innerHTML = `Olá, ${nome} ! Bem-vindo(a)!`;
  welcome.style.display = "block";
});