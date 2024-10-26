import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateCopyrightYear from './helpers/date_updater.js';
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';

loader();

parallax();

activeMenu();

resetToHome();

updateCopyrightYear();

sendEmail();

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider img');
  let currentIndex = 0;

  // Duplicate the slides for infinite effect
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
  });

  const totalSlides = slides.length;

  const changeSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;

    if (currentIndex === 0) {
      slider.scrollLeft = 0;
    } else {
      const offset = currentIndex * slides[0].clientWidth;
      slider.scrollLeft = offset;
    }
  };

  setInterval(changeSlide, 3000); // Cambia cada 3 segundos
});


// script.js
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - n)}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlide(currentSlide);

setInterval(nextSlide, 5000); // Cambiar slide cada 5 segundos


/*Para cambiar el script y este oscuro directamente */
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkmode-toggle");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // Aplica modo oscuro si es preferencia del usuario o si no hay preferencia guardada
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
    document.body.classList.add("dark-theme");
    darkModeToggle.checked = true; // Marca el toggle para reflejar el modo oscuro
  }

  // Agrega un evento para el toggle de modo oscuro
  darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  });
});
