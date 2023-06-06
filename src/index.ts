import { toggleAccordion } from 'src/Accordion';
import { initializeCardAnimation } from 'src/Cards';
import { startAnimation } from 'src/HeroImageAnimation';
import { setButtonBackgroundColorToRed } from 'src/LiveChat';
import { toggleMobileNavigation } from 'src/MobileMenu';
import { changeNavbarDuringScroll } from 'src/Navigation';
import animatePlaceholder from 'src/TypewriteAnimation';

toggleAccordion();
changeNavbarDuringScroll();
initializeCardAnimation();
setButtonBackgroundColorToRed();
startAnimation();
animatePlaceholder();
toggleMobileNavigation();

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
