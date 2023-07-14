import { gsap } from 'gsap';

const imageUrls: string[] = [
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64a14bb77c06a4e2d7ec4de1_hero-image-layer-2.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64a14bb76265165d6d83f5d6_hero-image-layer-3.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64a14bb70cf476b49e4caf60_hero-image-layer-4.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64a14bb72c99df9f4e6e96d6_hero-image-layer-5.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64a14bb7c8cd2039570ca07e_hero-image-layer-6.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64a14bb77c06a4e2d7ec4e26_hero-image-layer-7.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64a14bb7c8cd2039570ca07e_hero-image-layer-6.webp',
];

export function startAnimation(): void {
  const containerElement = document.querySelector('[hero-image-container="hero-image-animation"]');
  const imageElement = containerElement?.querySelector('img.hero-image-layer') as HTMLImageElement | null;

  if (imageElement) {
    imageElement.removeAttribute('srcset');
    imageElement.removeAttribute('sizes');
  }

  const timeline = gsap.timeline({ repeat: -1 });

  function switchImage(index: number): void {
    timeline.to(() => imageElement, {
      duration: 0.35,
      onComplete: () => {
        if (imageElement) {
          if (index === imageUrls.length - 2) {
            imageElement.src = imageUrls[imageUrls.length - 1];
          } else if (index === imageUrls.length - 1) {
            imageElement.src = imageUrls[imageUrls.length - 2];
          } else {
            imageElement.src = imageUrls[(index + 1) % imageUrls.length];
          }
        }

        switchImage((index + 1) % imageUrls.length);
      },
    });
  }

  switchImage(0);
}

document.addEventListener('DOMContentLoaded', () => {
  startAnimation();
});
