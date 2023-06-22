import { toggleAccordion } from 'src/Accordion';
import { initializeCardAnimation } from 'src/Cards';
import { startAnimation } from 'src/HeroImageAnimation';
import { setButtonBackgroundColorToRed } from 'src/LiveChat';
import { toggleMobileNavigation } from 'src/MobileMenu';
import { changeNavbarDuringScroll } from 'src/Navigation';
import animatePlaceholder from 'src/TypewriteAnimation';
import ScrollReveal from 'scrollreveal';
import { underlineAnimation } from 'src/UnderlineAnimation';
import style from '../src/style.css';

const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = style;

document.head.appendChild(linkElement);

toggleAccordion();
changeNavbarDuringScroll();
startAnimation();
initializeCardAnimation();
setButtonBackgroundColorToRed();
animatePlaceholder();
toggleMobileNavigation();
underlineAnimation();

// Changing input background color on focus
const inputElements = document.querySelectorAll('.input.rounded.margin-bottom-small');

inputElements.forEach((inputElement) => {
  inputElement.addEventListener('focus', () => {
    inputElement.style.backgroundColor = 'rgba(203, 213, 224, 0.1)';
    inputElement.style.color = '#cbd5e0';
  });

  inputElement.addEventListener('blur', () => {
    inputElement.style.backgroundColor = ''; // or whatever the default background color is
  });
});

const config = {
  delay: 400,
  distance: '120px',
};

ScrollReveal().reveal('.slide-bottom', {
  origin: 'top',
  distance: '10px',
  delay: 300,
});

ScrollReveal().reveal('.slide-up', {
  origin: 'bottom',
  ...config,
});

ScrollReveal().reveal('.slide-left', {
  origin: 'left',
  ...config,
});

ScrollReveal().reveal('.slide-right', {
  origin: 'right',
  ...config,
});
