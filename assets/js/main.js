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