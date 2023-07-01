import ScrollReveal from 'scrollreveal';

export const scrollAnimation = () => {
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
};
