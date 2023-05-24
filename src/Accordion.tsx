export function toggleAccordionStyle() {
  const element = document.querySelector('[accordion-item-trigger="accordion-style-change"]');
  let isBorderVisible = true;

  if (element !== null) {
    const targetElement = element as HTMLElement;
    const headingElement = targetElement.querySelector('h4'); // Select the <h4> element

    targetElement.addEventListener('click', function () {
      if (isBorderVisible) {
        targetElement.style.borderBottom = 'none';
        targetElement.style.backgroundColor = 'rgba(45,55,72,0.1)';
        targetElement.style.borderRadius = '8px';
        targetElement.style.padding = '20px';
        targetElement.style.transition = 'all 0.3s ease-in-out';

        if (headingElement) {
          headingElement.style.paddingTop = '0px';
        }

        isBorderVisible = false;
      } else {
        targetElement.style.padding = '0px';

        setTimeout(() => {
          targetElement.style.borderBottom = '1px solid #2d3748';
          targetElement.style.backgroundColor = '';
          targetElement.style.borderRadius = '';
          targetElement.style.transition = 'padding 0.5s ease-in-out';
          isBorderVisible = true;
        }, 230);
      }
    });
  }
}
