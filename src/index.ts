import { toggleAccordion } from 'src/Accordion';
import { initializeCardAnimation } from 'src/Cards';
import { startAnimation } from 'src/HeroImageAnimation';
import { toggleMobileNavigation } from 'src/MobileMenu';
import { changeNavbarDuringScroll } from 'src/Navigation';
import animatePlaceholder from 'src/TypewriteAnimation';
import { values } from 'src/Values';
import { blogImageAnimation } from 'src/BlogImageAnimation';
import { scrollAnimation } from 'src/ScrollAnimation';
import { textSwitchAnimation } from 'src/TextSwitchAnimation';
import { scrollToTop } from 'src/ScrollToTop';
import { setDynamicIds } from 'src/AddingDynamicIdsToBlogPost';

const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = '../src/index.css';

document.head.appendChild(linkElement);

scrollToTop();
toggleAccordion();
blogImageAnimation();
changeNavbarDuringScroll();
startAnimation();
initializeCardAnimation();
animatePlaceholder();
toggleMobileNavigation();
values();
scrollAnimation();
textSwitchAnimation();
setDynamicIds();

const mobileMenuContainer: HTMLElement | null = document.querySelector('.mobile-menu-container');
const mediaQuery: MediaQueryList = window.matchMedia('(min-width: 768px)');

function handleMediaQueryChange(event: MediaQueryListEvent) {
  if (event.matches) {
    if (mobileMenuContainer) {
      mobileMenuContainer.style.display = 'none';
    }
  } else {
    if (mobileMenuContainer) {
      mobileMenuContainer.style.display = '';
    }
  }
}

mediaQuery.addEventListener('change', handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);

// Get the element with the attribute blog-post="container"
const element = document.getElementById('test');

// Set the background color to red
if (element) {
  element.style.backgroundColor = 'red';
}
