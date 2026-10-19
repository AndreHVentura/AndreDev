//script carrossel
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function updateCarousel() {
  const total = items.length;

  items.forEach((item, index) => {
    item.classList.remove("center", "left", "right");
    
    if (index === currentIndex) {
      item.classList.add("center");
    } else if (index === (currentIndex - 1 + total) % total) {
      item.classList.add("left");
    } else if (index === (currentIndex + 1) % total) {
      item.classList.add("right");
    }
  });
}

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

// Inicializa ao carregar
updateCarousel();

//script botão voltar ao topo
window.addEventListener("scroll", function () {
  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Ação de voltar ao topo
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//script para a troca de imagens na thumb
document.querySelectorAll('.project-card').forEach(card => {
  const mainImage = card.querySelector('.main-image');
  const thumbnails = card.querySelectorAll('.thumb');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      // Atualiza imagem principal
      mainImage.src = thumb.src;

      // Remove 'active' das outras thumbs
      thumbnails.forEach(t => t.classList.remove('active'));

      // Adiciona 'active' à thumb clicada
      thumb.classList.add('active');
    });
  });
});

//abrir e fechar menu dropdown
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("nav-Links");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  navLinks.classList.toggle("show");
  menuBtn.innerHTML = menuOpen
    ? '<ion-icon name="close-outline"></ion-icon>'
    : '<ion-icon name="menu-outline"></ion-icon>';
});

// Tema e transição entre as fotos de perfil
const themeToggle = document.getElementById('themeToggle');
function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
  themeToggle.innerHTML = `<ion-icon name="${dark ? 'sunny-outline' : 'moon-outline'}" aria-hidden="true"></ion-icon>`;
}
updateThemeButton();
themeToggle.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = dark ? 'light' : 'dark';
  try { localStorage.setItem('portfolio-theme', dark ? 'light' : 'dark'); } catch(e) {}
  updateThemeButton();
});
