export function toggleScrollToTop() {
  const scrollToTopElement = document.querySelector('.scroll-to-top') as HTMLElement;
  const scrollThreshold = 0.3 * document.documentElement.scrollHeight;

  function handleScroll() {
    if (window.scrollY >= scrollThreshold) {
      scrollToTopElement.style.display = 'block';
    } else {
      scrollToTopElement.style.display = 'none';
    }
  }

  window.addEventListener('scroll', handleScroll);
}
