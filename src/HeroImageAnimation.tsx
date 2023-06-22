import { gsap } from 'gsap';

const imageUrls = [
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c1a3c22f94d4eb2411_hero-image-layer-3.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c1b40eaf59585bc45f_hero-image-layer-4.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a804c77a4d4b39e4dfac_hero-image-layer-3.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c24c07c8a86b8c8170_hero-image-layer-6.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c28bd38417231f13eb_hero-image-layer-7.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c2bc4b35987b99dab1_hero-image-layer-8.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c24176cab6d242a4e5_hero-image-layer-9.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a8055739d23f87f8e67c_hero-image-layer-8.webp',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c24176cab6d242a4e5_hero-image-layer-9.webp',
];

export function startAnimation() {
  const containerElement = document.querySelector('[hero-image-container="hero-image-animation"]');
  let imageElement = containerElement?.querySelector('img.hero-image-layer');

  if (!imageElement) {
    imageElement = document.createElement('img');
    imageElement.style.display = 'none';
    imageElement.classList.add('hero-image-layer');
    containerElement?.appendChild(imageElement);
  }

  const timeline = gsap.timeline();

  imageUrls.forEach((url, index) => {
    timeline.to(imageElement, {
      display: 'none',
      duration: 0.5,
      onComplete: () => {
        imageElement.src = url;
        imageElement.style.display = 'block';
      },
    });
  });

  timeline.play();
}

document.addEventListener('DOMContentLoaded', () => {
  startAnimation();
});
