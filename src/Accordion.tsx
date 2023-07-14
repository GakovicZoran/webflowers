export function toggleAccordion() {
  const elements = document.querySelectorAll<HTMLElement>('[accordion-item-trigger="accordion-style-change"]');

  let activeAccordion: HTMLElement | null = null;

  elements.forEach((element) => {
    const accordionContent = element.querySelector<HTMLElement>('[accordion-content="accordion-content-visibility"]');

    if (element.id === 'active-accordion') {
      applyAccordionOpenStyle(element, accordionContent);
      activeAccordion = accordionContent;
    }

    element.addEventListener('click', function () {
      if (activeAccordion === accordionContent) {
        applyAccordionClosedStyle(element, accordionContent);
        activeAccordion = null;
      } else {
        if (activeAccordion) {
          applyAccordionClosedStyle(activeAccordion.parentElement!, activeAccordion);
          setTimeout(() => {
            applyAccordionOpenStyle(element, accordionContent);
            activeAccordion = accordionContent;
          }, 500);
        } else {
          applyAccordionOpenStyle(element, accordionContent);
          activeAccordion = accordionContent;
        }
      }
    });

    if (accordionContent) {
      accordionContent.addEventListener('transitionend', function () {
        const shouldExpand = element.classList.contains('accordion-open');
        accordionContent.style.height = shouldExpand ? 'auto' : '0px';
        accordionContent.style.overflow = shouldExpand ? 'visible' : 'hidden';
      });
    }
  });
}

function applyAccordionOpenStyle(element: HTMLElement, accordionContent: HTMLElement | null) {
  element.style.cssText = `
      border-bottom: none;
      background-color: rgba(45,55,72,0.1);
      border-radius: 8px;
      padding: 20px;
      transition: all 0.3s ease-in-out;
    `;

  const accordionArrow = element.querySelector<HTMLElement>('.accordion-arrow');
  if (accordionArrow) {
    accordionArrow.style.transform = 'rotate(180deg)';
    accordionArrow.style.transition = 'all 0.3s ease-in-out';
  }

  const headingElements = element.querySelectorAll<HTMLElement>('h4');
  headingElements.forEach((headingElement) => {
    headingElement.style.paddingTop = '0px';
  });

  if (accordionContent) {
    accordionContent.style.height = 'auto';
    accordionContent.style.overflow = 'visible';
  }
}

function applyAccordionClosedStyle(element: HTMLElement, accordionContent: HTMLElement | null) {
  element.style.padding = '0px';

  const accordionArrow = element.querySelector<HTMLElement>('.accordion-arrow');
  if (accordionArrow) {
    accordionArrow.style.transform = '';
  }

  setTimeout(() => {
    element.style.cssText = `
        border-bottom: 1px solid #2d3748;
        background-color: '';
        border-radius: '';
        transition: padding 0.5s ease-in-out;
      `;
    if (accordionContent) {
      accordionContent.style.height = '0px';
      accordionContent.style.overflow = 'hidden';
    }
  }, 0);
}
