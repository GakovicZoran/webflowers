export function initializeCardAnimation() {
  const cardAnimationWrapper = document.querySelectorAll('.card-visible-on-load');
  const cardWrappers = document.querySelectorAll('[card-animation-wrapper="card-interaction"]');
  const cardInnerContainersHidden = document.querySelectorAll('.card-unvisible-on-load');
  const isCardVisible = new Array(cardAnimationWrapper.length).fill(false);

  function addCardAnimation() {
    const hoverImageSrcsFirstSection = [
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64706594e005606711d996c8_service-branding-active.svg',
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/645b8cf80be57fc479473933_services-designing-active.svg',
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/645b8cf8b620b3816fd22c4f_services-development-active.svg',
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/645b8cf80ae7410c923feec9_services-enterprise-active.svg',
    ];

    const hoverImageSrcsSecondSection = [
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474feb69a597b99f183633c_octacode-hovered-project.webp',
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474feb61f9f3593b5706f04_webflowers-hovered-project.webp',
    ];

    const hoverImageSrcsThirdCard = [
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/647602b455bdd6a1ee761d8d_branding-healthy-hovered.png',
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/647602b4b119e5e438dd50f5_branding-forest-hovered.png',
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/647602b450d16565dff6841a_branding-webflowers-hovered.png',
    ];

    cardWrappers.forEach((cardWrapper, index) => {
      const innerWrapper = cardWrapper.querySelector('[card-inner-wrapper="card-inner-interaction"]');
      const defaultImage = innerWrapper?.querySelector('img') as HTMLImageElement | null;
      const defaultImageSrc = defaultImage?.src;

      if (innerWrapper && defaultImage) {
        defaultImage.removeAttribute('srcset');
        defaultImage.removeAttribute('sizes');
        innerWrapper.addEventListener('mouseover', () => {
          if (defaultImageSrc) {
            const hoverImageSrc =
              index < hoverImageSrcsFirstSection.length
                ? hoverImageSrcsFirstSection[index]
                : hoverImageSrcsSecondSection[index - hoverImageSrcsFirstSection.length];
            defaultImage.src = hoverImageSrc;
          }
        });

        innerWrapper.addEventListener('mouseout', () => {
          if (defaultImageSrc) {
            defaultImage.src = defaultImageSrc;
          }
        });
      }
    });

    // Handle second section separately
    const secondSectionWrappers = document.querySelectorAll('.modified-card-animation-wrapper');
    const thirdCardWrapper = document.querySelector('.card-branding-container');
    const thirdCardImages = thirdCardWrapper?.querySelectorAll('img');

    secondSectionWrappers.forEach((cardWrapper, index) => {
      const innerWrapper = cardWrapper.querySelector('[card-inner-wrapper="card-inner-interaction"]');
      const defaultImage = innerWrapper?.querySelector('img') as HTMLImageElement | null;
      const defaultImageSrc = defaultImage?.src;

      if (innerWrapper && defaultImage) {
        innerWrapper.addEventListener('mouseover', () => {
          if (defaultImageSrc) {
            const hoverImageSrc = hoverImageSrcsSecondSection[index];
            defaultImage.src = hoverImageSrc;
          }
        });

        innerWrapper.addEventListener('mouseout', () => {
          if (defaultImageSrc) {
            defaultImage.src = defaultImageSrc;
          }
        });
      }
    });

    if (thirdCardWrapper && thirdCardImages) {
      thirdCardImages.forEach((image, index) => {
        const defaultImageSrc = image.src;

        image.addEventListener('mouseover', () => {
          if (defaultImageSrc) {
            image.src = hoverImageSrcsThirdCard[index];
          }
        });

        image.addEventListener('mouseout', () => {
          if (defaultImageSrc) {
            image.src = defaultImageSrc;
          }
        });
      });
    }

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
