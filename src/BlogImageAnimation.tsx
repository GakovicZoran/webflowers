import { gsap } from 'gsap';

const imageUrls: string[] = [
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64a019085ce2fe57691bb979_blog-image-layer-2.png',
  'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64a01908882782a8aa033580_blog-image-layer-1.png',
];

export function blogImageAnimation(): void {
  function switchImage(index: number, imageElement: HTMLImageElement | null): void {
    gsap.to(imageElement, {
      duration: 0.75,
      onComplete: () => {
        if (imageElement) {
          imageElement.src = imageUrls[index];
        }
        switchImage((index + 1) % imageUrls.length, imageElement);
      },
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const containerElement: Element | null = document.querySelector('[blog="animation"]');
    const imageElement: HTMLImageElement | null = containerElement?.querySelector('img.blog-image-layer');

    if (imageElement) {
      imageElement.removeAttribute('srcset');
      imageElement.removeAttribute('sizes');
      switchImage(0, imageElement);
    }
  });
}
