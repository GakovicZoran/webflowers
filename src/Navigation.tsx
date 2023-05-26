export function changeNavbarBackground() {
  const navigation = document.getElementById('navigation');
  const sections = Array.from(document.querySelectorAll<HTMLElement>('[id^="section-"]'));
  const getAnchorTags = navigation?.querySelectorAll('a');
  const navbarCtaBtn = document.querySelector('.navbar-cta-btn') as HTMLElement;
  const navigationInnerContainer = navigation?.querySelector('.navigation-inner-container');
  const logoAnchorTag = document.createElement('a');
  const logoImgTag = document.createElement('img');
  logoAnchorTag.appendChild(logoImgTag);

  let prevScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (navigation && sections.length > 0) {
    const sectionTops = sections.map((section) => section.offsetTop - 50);

    const backgroundColors = ['#2d3748', '#2d3748', '#cbd5e0', '#2d3748', '#cbd5e0'];

    const logoImage1 = new Image();
    logoImage1.src = 'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/64524689a1a3e6857d97fd63_dz-logo.svg';

    const logoImage2 = new Image();
    logoImage2.src =
      'https://uploads-ssl.webflow.com/63fc78bcc7aecb3a5d03c02c/646f7160b916583eaf0eafce_logo-primary-color.svg';

    if (navigationInnerContainer) {
      navigationInnerContainer.appendChild(logoAnchorTag);
    }

    logoAnchorTag.className = 'logo-image';

    navigation.style.transition = 'transform 0.3s, background-color 0.3s';

    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      let index = sectionTops.findIndex((top, i) => {
        const nextTop = sectionTops[i + 1] || Number.MAX_VALUE;
        return scrollPosition >= top && scrollPosition < nextTop;
      });

      const backgroundColor = backgroundColors[index];

      navigation.style.backgroundColor = backgroundColor;

      if (backgroundColor === '#2d3748') {
        logoImgTag.src = logoImage1.src;
        getAnchorTags?.forEach((anchor) => {
          anchor.style.color = '#cbd5e0';
        });
        navbarCtaBtn.style.border = '1px solid #cbd5e0';
        logoImage1.style.display = 'block';
        logoImage2.style.display = 'none';
      } else if (backgroundColor === '#cbd5e0') {
        logoImgTag.src = logoImage2.src;
        getAnchorTags?.forEach((anchor) => {
          anchor.style.color = '#2d3748';
        });
        navbarCtaBtn.style.border = '1px solid #2d3748';
        logoImage1.style.display = 'none';
        logoImage2.style.display = 'block';
      }

      if (scrollPosition > prevScrollPosition) {
        navigation.style.transform = 'translateY(-100%)';
      } else {
        navigation.style.transform = 'translateY(0)';
      }

      prevScrollPosition = scrollPosition;
    });

    window.dispatchEvent(new Event('scroll'));

    window.addEventListener('resize', () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 768) {
        logoImgTag.style.width = '255px';
        logoImgTag.style.height = '45px';
      } else if (windowWidth >= 480) {
        logoImgTag.style.width = '168px';
        logoImgTag.style.height = '30px';
      } else {
        logoImgTag.style.width = '131px';
        logoImgTag.style.height = '24px';
      }
    });

    window.dispatchEvent(new Event('resize'));
  }
}
