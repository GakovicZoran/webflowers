export function changeNavbarDuringScroll() {
  const navigation = document.querySelector<HTMLElement>('[navigation="trigger"]');
  const sections = Array.from(document.querySelectorAll<HTMLElement>('[id^="section-"]'));
  const getAnchorTags = navigation?.querySelectorAll('a');
  const navbarCtaBtn = document.querySelector('.hero-cta') as HTMLElement;
  const navigationInnerContainer = navigation?.querySelector('.navigation-logo-container');
  const logoAnchorTag = document.createElement('a');
  const logoImgTag = document.createElement('img');
  const logoAnchorTags = navigationInnerContainer?.querySelectorAll('.logo-image');
  const hamburgerMenuIcon = document.querySelector<HTMLElement>('.hamburger-menu');
  const element = document.querySelector<HTMLElement>('#section-1');
  const navBarContainer = document.querySelector<HTMLElement>('#nav-bar-container');

  logoAnchorTag.appendChild(logoImgTag);

  let prevScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (navigation && sections.length > 0) {
    const sectionTops = sections.map((section) => section.offsetTop - 50);
    const backgroundColors = ['#2d3748', '#2d3748', '#cbd5e0', '#2d3748', '#cbd5e0'];

    if (navigationInnerContainer && logoAnchorTags?.length === 1) {
      logoAnchorTags[0]?.remove();
    }

    if (navigationInnerContainer) {
      navigationInnerContainer.appendChild(logoAnchorTag);
    }

    logoAnchorTag.className = 'logo-image';

    navigation.style.transition = 'transform 0.3s, background-color 0.3s';

    const logoImage1 = 'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64524689a1a3e6857d97fd63_dz-logo.svg';
    const logoImage2 =
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/6452b092c110247c6c6ebedd_dz-logo-footer.svg';

    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      console.log(scrollPosition);
      let index = sectionTops.findIndex((top, i) => {
        const nextTop = sectionTops[i + 1] || Number.MAX_VALUE;
        return scrollPosition >= top && scrollPosition < nextTop;
      });

      if (scrollPosition === 0 && navBarContainer) {
        navBarContainer.style.position = 'sticky';
        navBarContainer.style.top = '0';
        navBarContainer.style.width = '100%';
        navigation.style.position = '';
        navigation.style.top = '';
        navigation.style.width = '';
      } else if (scrollPosition > 100) {
        navBarContainer.style.position = 'static';
        navigation.style.position = 'fixed';
        navigation.style.top = '0';
        navigation.style.width = '100%';
      }

      const backgroundColor = backgroundColors[index];

      navigation.style.backgroundColor = backgroundColor;

      if (backgroundColor === '#2d3748') {
        logoImgTag.src = logoImage1;

        getAnchorTags?.forEach((anchor) => {
          anchor.style.color = '#cbd5e0';
        });
        navbarCtaBtn.style.border = '1px solid #cbd5e0';
      } else if (backgroundColor === '#cbd5e0') {
        logoImgTag.src = logoImage2;

        getAnchorTags?.forEach((anchor) => {
          anchor.style.color = '#2d3748';
        });
        navbarCtaBtn.style.border = '1px solid #2d3748';
      }

      if (scrollPosition > prevScrollPosition) {
        navigation.style.transform = 'translateY(-100%)';

        if (hamburgerMenuIcon) {
          hamburgerMenuIcon.style.transform = 'translateY(-200%)';
          hamburgerMenuIcon.style.transition = 'transform 0.2s, background-color 0.2s';
        }
      } else {
        navigation.style.transform = 'translateY(0)';

        if (hamburgerMenuIcon) {
          hamburgerMenuIcon.style.transform = 'translateY(0)';
          hamburgerMenuIcon.style.transition = 'transform 0.3s, background-color 0.3s';
        }
      }
      prevScrollPosition = scrollPosition;
    });

    window.dispatchEvent(new Event('scroll'));

    window.addEventListener('resize', () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 991) {
        logoImgTag.style.width = '255px';
        logoImgTag.style.height = '45px';
      } else {
        logoImgTag.style.width = '168px';
        logoImgTag.style.height = '30px';
      }
    });

    window.dispatchEvent(new Event('resize'));
  }
}
