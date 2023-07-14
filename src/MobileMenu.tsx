export function toggleMobileNavigation(): void {
  const hamburgerMenuElement = document.querySelector<HTMLElement>('[hamburger-menu="trigger"]');
  const mobileNavigationElement = document.querySelector<HTMLElement>('[mobile="navigation"]');

  const elements = document.querySelectorAll('[close-mobile-menu="on-click"]');
  elements.forEach((element) => {
    element.addEventListener('click', function () {
      const mobileMenuContainer = document.querySelector('.mobile-menu-container') as HTMLElement | null;
      const closeHamburgerMenu = document.querySelector('.close-hamburger-menu');

      if (mobileMenuContainer && closeHamburgerMenu) {
        mobileMenuContainer.style.display = 'none';
        closeHamburgerMenu.style.display = 'none';
      }
    });
  });

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
