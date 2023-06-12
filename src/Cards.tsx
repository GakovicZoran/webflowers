export function closeActiveCard(cardAnimationWrapper, cardInnerContainersHidden, activeCardIndex) {
  if (activeCardIndex !== -1) {
    const activeWrapper = cardAnimationWrapper[activeCardIndex] as HTMLElement;
    const activeInnerContainer = cardInnerContainersHidden[activeCardIndex] as HTMLElement;
    activeInnerContainer.style.opacity = '0';
    activeInnerContainer.style.display = 'none';
    activeWrapper.style.display = 'block';

    setTimeout(() => {
      activeWrapper.style.transition = 'opacity 2s ease';
      activeWrapper.style.opacity = '100%';
    }, 300);
  }
}

export function initializeCardAnimation() {
  const cardAnimationWrapper = document.querySelectorAll('.card-visible-on-load');
  const brandingAnimationWrapper = document.querySelectorAll('.branding-card');
  const cardWrappers = document.querySelectorAll('[card-animation-wrapper="card-interaction"]');
  const cardInnerContainersHidden = document.querySelectorAll('.card-unvisible-on-load');
  const brandingImageCardContainer = document.querySelectorAll('.branding-image-inner-container');

  let activeCardIndex = -1;

  function addCardAnimation() {
    const hoverImageSrcsFirstSection = [
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64706594e005606711d996c8_service-branding-active.svg',
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/645b8cf80be57fc479473933_services-designing-active.svg',
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/645b8cf8b620b3816fd22c4f_services-development-active.svg',
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/645b8cf80ae7410c923feec9_services-enterprise-active.svg',
    ];

    const hoverImageSrcsSecondSection = [
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64870feaa4e43a6a159ef031_octacode-hovered-project.svg',
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64870fea90a7efafd9625765_webflowers-hovered-project.svg',
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
    const healthyCard = document.querySelector<HTMLElement>('[card="healthy"]');
    const forestDiaryCard = document.querySelector<HTMLElement>('[card="forestdiary"]');
    const webFlowersCard = document.querySelector<HTMLElement>('[card="webflowers"]');

    brandingImageCardContainer.forEach((element, index) => {
      element.addEventListener('click', () => {
        if (index === 0) {
          brandingAnimationWrapper.forEach((wrapper, index) => {
            wrapper.addEventListener('click', (event) => {
              closeActiveCard(cardAnimationWrapper, cardInnerContainersHidden, activeCardIndex);

              event.stopPropagation(); // Prevent click event propagation
              healthyCard.style.display = 'block';
              wrapper.style.opacity = '0';
              wrapper.style.display = 'none';

              if (forestDiaryCard) {
                forestDiaryCard.style.display = 'none';
              }

              if (webFlowersCard) {
                webFlowersCard.style.display = 'none';
              }

              setTimeout(() => {
                if (healthyCard) {
                  healthyCard.style.transition = 'opacity 2s ease';
                  healthyCard.style.opacity = '100%';
                }
              }, 300);
            });

            if (healthyCard) {
              healthyCard.addEventListener('click', (event) => {
                healthyCard.style.display = 'none';
                wrapper.style.display = 'block';

                setTimeout(() => {
                  wrapper.style.transition = 'opacity 2s ease';
                  healthyCard.style.opacity = '0';
                  wrapper.style.opacity = '100%';
                }, 300);
              });
            }
          });
        } else if (index === 1) {
          brandingAnimationWrapper.forEach((wrapper, index) => {
            wrapper.addEventListener('click', (event) => {
              closeActiveCard(cardAnimationWrapper, cardInnerContainersHidden, activeCardIndex);

              event.stopPropagation(); // Prevent click event propagation
              if (forestDiaryCard) {
                forestDiaryCard.style.display = 'block';
              }

              if (healthyCard) {
                healthyCard.style.display = 'none';
              }

              if (webFlowersCard) {
                webFlowersCard.style.display = 'none';
              }

              wrapper.style.opacity = '0';
              wrapper.style.display = 'none';

              setTimeout(() => {
                if (forestDiaryCard) {
                  forestDiaryCard.style.transition = 'opacity 2s ease';
                  forestDiaryCard.style.opacity = '100%';
                }
              }, 300);
            });

            if (forestDiaryCard) {
              forestDiaryCard.addEventListener('click', (event) => {
                forestDiaryCard.style.display = 'none';
                wrapper.style.display = 'block';

                setTimeout(() => {
                  wrapper.style.transition = 'opacity 2s ease';
                  forestDiaryCard.style.opacity = '0';
                  wrapper.style.opacity = '100%';
                }, 300);
              });
            }
          });
        } else if (index === 2) {
          brandingAnimationWrapper.forEach((wrapper, index) => {
            wrapper.addEventListener('click', (event) => {
              closeActiveCard(cardAnimationWrapper, cardInnerContainersHidden, activeCardIndex);

              event.stopPropagation(); // Prevent click event propagation
              if (webFlowersCard) {
                webFlowersCard.style.display = 'block';
              }
              wrapper.style.opacity = '0';
              wrapper.style.display = 'none';

              if (forestDiaryCard) {
                forestDiaryCard.style.display = 'none';
              }

              if (healthyCard) {
                healthyCard.style.display = 'none';
              }

              setTimeout(() => {
                if (webFlowersCard) {
                  webFlowersCard.style.transition = 'opacity 2s ease';
                  webFlowersCard.style.opacity = '100%';
                }
              }, 300);
            });

            if (webFlowersCard) {
              webFlowersCard.addEventListener('click', (event) => {
                webFlowersCard.style.display = 'none';
                wrapper.style.display = 'block';

                setTimeout(() => {
                  wrapper.style.transition = 'opacity 2s ease';
                  webFlowersCard.style.opacity = '0';
                  wrapper.style.opacity = '100%';
                }, 300);
              });
            }
          });
        }
      });
    });

    cardAnimationWrapper.forEach((wrapper, index) => {
      const innerContainer = cardInnerContainersHidden[index] as HTMLElement;
      wrapper.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click event propagation
        if (index === activeCardIndex) {
          // Clicked on the active card, close it
          closeCard();
        } else {
          // Clicked on a different card, close the active card (if any) and open the clicked card
          closeActiveCard(cardAnimationWrapper, cardInnerContainersHidden, activeCardIndex);

          openCard();
        }
      });

      innerContainer.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click event propagation
        closeCard();
      });

      function openCard() {
        innerContainer.style.display = 'block';
        wrapper.style.opacity = '0';
        wrapper.style.display = 'none';

        setTimeout(() => {
          innerContainer.style.transition = 'opacity 2s ease';
          innerContainer.style.opacity = '100%';
        }, 300);

        activeCardIndex = index;
      }

      function closeCard() {
        innerContainer.style.opacity = '0';
        innerContainer.style.display = 'none';
        wrapper.style.display = 'block';

        setTimeout(() => {
          wrapper.style.transition = 'opacity 2s ease';
          wrapper.style.opacity = '100%';
        }, 300);

        activeCardIndex = -1;
      }
    });
  }

  addCardAnimation();
}
