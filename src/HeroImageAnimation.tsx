import { gsap } from 'gsap';

const imageUrls: string[] = [
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c1b40eaf59585bc45f_hero-image-layer-4.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a804c77a4d4b39e4dfac_hero-image-layer-3.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c24c07c8a86b8c8170_hero-image-layer-6.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c28bd38417231f13eb_hero-image-layer-7.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c2bc4b35987b99dab1_hero-image-layer-8.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c24176cab6d242a4e5_hero-image-layer-9.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a8055739d23f87f8e67c_hero-image-layer-8.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c24176cab6d242a4e5_hero-image-layer-9.webp',
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
            // Switch to the last image
            imageElement.src = imageUrls[imageUrls.length - 1];
          } else if (index === imageUrls.length - 1) {
            // Switch to the second-to-last image
            imageElement.src = imageUrls[imageUrls.length - 2];
          } else {
            // Switch to the next image in a loop
            imageElement.src = imageUrls[(index + 1) % imageUrls.length];
          }
        }

        switchImage((index + 1) % imageUrls.length); // Continue the loop
      },
    });
  }

  switchImage(0); // Start the loop with the first image
}

document.addEventListener('DOMContentLoaded', () => {
  startAnimation();
});
