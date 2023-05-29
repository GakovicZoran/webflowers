import { gsap } from 'gsap';

const imageUrls = [
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c1a3c22f94d4eb2411_hero-image-layer-3.png',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c1b40eaf59585bc45f_hero-image-layer-4.png',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a804c77a4d4b39e4dfac_hero-image-layer-3.png',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c24c07c8a86b8c8170_hero-image-layer-6.png',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c28bd38417231f13eb_hero-image-layer-7.png',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c2bc4b35987b99dab1_hero-image-layer-8.png',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c24176cab6d242a4e5_hero-image-layer-9.png',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a8055739d23f87f8e67c_hero-image-layer-8.png',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6474a3c24176cab6d242a4e5_hero-image-layer-9.png',
];

export function startAnimation() {
  const containerElement = document.querySelector('[hero-image-container="hero-image-animation"]');
  let imageElements = containerElement?.querySelectorAll('img.hero-image-layer');

  if (imageElements !== undefined && imageElements.length > 8) {
    for (let i = imageElements.length - 1; i >= imageElements.length - 9; i--) {
      containerElement?.removeChild(imageElements[i]);
    }
  }
  const timeline = gsap.timeline();

  imageUrls.forEach((url, index) => {
    const imageElement = document.createElement('img');
    imageElement.src = url;
    imageElement.style.display = 'none';
    imageElement.style.position = 'absolute';
    imageElement.style.top = '0';
    imageElement.style.left = '0';
    imageElement.classList.add('hero-image-layer');

    if (index === imageUrls.length - 3) {
      imageElement.style.top = '1px';
    } else if (index === imageUrls.length - 1) {
      imageElement.style.top = '1px';
    } else {
      imageElement.style.top = '0';
    }
    containerElement?.appendChild(imageElement);

    imageElements = containerElement?.querySelectorAll('img.hero-image-layer');

    timeline
      .to(imageElements as NodeListOf<Element>, {
        display: 'none',
        duration: 0.2,
      })
      .to(imageElement, {
        display: 'block',
        duration: 0.2,
      });
  });

  timeline.play();
}
