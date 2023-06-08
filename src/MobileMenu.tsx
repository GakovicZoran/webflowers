export function toggleMobileNavigation(): void {
  const navigationElement = document.querySelector<HTMLElement>('[navigation="trigger"]');
  const hamburgerMenuElement = document.querySelector<HTMLElement>('[hamburger-menu="trigger"]');
  const mobileNavigationElement = document.querySelector<HTMLElement>('[mobile="navigation"]');

  if (hamburgerMenuElement && mobileNavigationElement) {
    hamburgerMenuElement.addEventListener('click', () => {
      if (mobileNavigationElement.style.display === 'block') {
        mobileNavigationElement.style.display = 'none';
      } else {
        mobileNavigationElement.style.display = 'block';
      }
    });
  }
}

toggleMobileNavigation();
