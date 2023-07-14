import Typed from 'typed.js';

export const textSwitchAnimation = () => {
  const typed = new Typed('#blog-text-switch', {
    strings: ['Thoughts.', 'Ideas.', 'Stories.', 'Solutions.'],
    typeSpeed: 100,
    loop: true,
    fadeOut: true,
  });

  return typed;
};
