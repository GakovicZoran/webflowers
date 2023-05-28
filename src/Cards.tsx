export function initializeCardAnimation() {
  const cardAnimationWrapper = document.querySelectorAll('.card-visible-on-load');
  const cardWrappers = document.querySelectorAll('[card-animation-wrapper="card-interaction"]');
  const cardInnerContainersHidden = document.querySelectorAll('.card-unvisible-on-load');
  const isCardVisible = new Array(cardAnimationWrapper.length).fill(false);

  function addCardAnimation() {
    const style = document.createElement('style');
    style.innerHTML = `
      .hover-image {
        position: absolute;
        top: 50%;
        left: 50.2%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      .hover-image.visible {
        opacity: 1;
        transition: opacity 0.5s ease;
      }
    `;
    document.head.appendChild(style);

    const hoverImageSrcs = [
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64706594e005606711d996c8_service-branding-active.svg',
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/645b8cf80be57fc479473933_services-designing-active.svg',
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/645b8cf8b620b3816fd22c4f_services-development-active.svg',
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/645b8cf80ae7410c923feec9_services-enterprise-active.svg',
    ];

    cardWrappers.forEach((cardWrapper, index) => {
      const innerWrapper = cardWrapper.querySelector('[card-inner-wrapper="card-inner-interaction"]');
      const hoverImageSrc = hoverImageSrcs[index];
      const defaultImage = innerWrapper?.querySelector('img');

      if (cardWrapper.querySelector('.hover-image')) {
        return;
      }

      if (innerWrapper && defaultImage) {
        const hoverImage = new Image();
        hoverImage.src = hoverImageSrc;
        hoverImage.classList.add('hover-image');

        const cardImageContainers = cardWrapper.querySelectorAll('[card-image-container="card-image-fixing-position"]');
        cardImageContainers.forEach((container) => {
          container.appendChild(hoverImage);
        });

        innerWrapper.addEventListener('mouseover', () => {
          defaultImage.style.opacity = '0';

          hoverImage.classList.add('visible');
        });

        innerWrapper.addEventListener('mouseout', () => {
          defaultImage.style.opacity = '1';
          hoverImage.classList.remove('visible');
        });
      }
    });

    toggleCardInnerContainer();
  }

  function toggleCardInnerContainer() {
    cardAnimationWrapper.forEach((wrapper, index) => {
      const innerContainer = cardInnerContainersHidden[index] as HTMLElement;
      wrapper.addEventListener('click', () => {
        for (let i = 0; i < isCardVisible.length; i++) {
          if (isCardVisible[i] && i !== index) {
            const prevWrapper = cardAnimationWrapper[i] as HTMLElement;
            const prevContainer = cardInnerContainersHidden[i] as HTMLElement;
            prevContainer.style.opacity = '0';
            innerContainer.style.transition = 'opacity 4s ease';
            prevContainer.style.transition = 'opacity 4s ease';

            setTimeout(() => {
              prevContainer.style.display = 'none';
            }, 500);

            setTimeout(() => {
              prevWrapper.style.display = 'block';
            }, 500);

            setTimeout(() => {
              prevWrapper.style.opacity = '0';
              prevWrapper.style.transition = 'opacity 1s ease';
            }, 500);

            setTimeout(() => {
              prevWrapper.style.opacity = '1';
            }, 800);

            isCardVisible[i] = false;
          }
        }

        setTimeout(() => {
          innerContainer.style.opacity = '0';

          setTimeout(() => {
            innerContainer.style.display = 'block';

            setTimeout(() => {
              innerContainer.style.opacity = '1';
            }, 10);
          }, 10);
          (wrapper as HTMLElement).style.display = 'none';

          isCardVisible[index] = true;
        }, 500);
      });

      innerContainer.addEventListener('click', () => {
        innerContainer.style.opacity = '0';

        setTimeout(() => {
          innerContainer.style.display = 'none';
          setTimeout(() => {
            (wrapper as HTMLElement).style.display = 'block';
            setTimeout(() => {
              innerContainer.style.opacity = '1';
            }, 10);
          }, 10);
          isCardVisible[index] = false;
        }, 500);
      });
    });
  }

  addCardAnimation();
}
