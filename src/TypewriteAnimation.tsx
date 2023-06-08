const animatePlaceholder = (): void => {
  const texts: string[] = ['Type your name', 'Ex: Someone'];
  const input: HTMLInputElement | null = document.querySelector('#searchbox');

  interface AnimationWorker {
    start: () => void;
    stop: () => void;
  }

  const createAnimationWorker = (input: HTMLInputElement, texts: string[]): AnimationWorker => {
    let defaultPlaceholder = input.getAttribute('placeholder');
    let curTextNum = 0;
    let curPlaceholder = '';
    let blinkCounter = 0;
    let animationFrameId: number = 0;
    let animationActive = false;
    const switchTimeout = 500;
    let animateTimeout = 150;

    const switchAnimation = (): void => {
      input.classList.add('imitatefocus');
      setTimeout(() => {
        input.classList.remove('imitatefocus');
        input.setAttribute('placeholder', curTextNum === 0 ? defaultPlaceholder : curPlaceholder);

        setTimeout(() => {
          input.setAttribute('placeholder', curPlaceholder);
          if (animationActive) animationFrameId = window.requestAnimationFrame(animate);
        }, switchTimeout);
      }, switchTimeout);
    };

    const animate = (): void => {
      if (!animationActive) return;
      const curPlaceholderFullText: string = texts[curTextNum];

      if (curPlaceholder === curPlaceholderFullText + '|' && blinkCounter === 3) {
        blinkCounter = 0;
        curTextNum = (curTextNum + 1) % texts.length;
        curPlaceholder = '|';
        switchAnimation();
        return;
      } else if (curPlaceholder === curPlaceholderFullText + '|' && blinkCounter < 3) {
        curPlaceholder = curPlaceholderFullText;
        blinkCounter++;
      } else if (curPlaceholder === curPlaceholderFullText && blinkCounter < 3) {
        curPlaceholder += '|';
      } else {
        curPlaceholder = curPlaceholderFullText.slice(0, curPlaceholder.length + 1) + '|';
        animateTimeout = 150;
      }

      input.setAttribute('placeholder', curPlaceholder);
      setTimeout(() => {
        if (animationActive) animationFrameId = window.requestAnimationFrame(animate);
      }, animateTimeout);
    };

    const stopAnimation = (): void => {
      animationActive = false;
      window.cancelAnimationFrame(animationFrameId);
    };

    const startAnimation = (): void => {
      animationActive = true;
      animationFrameId = window.requestAnimationFrame(animate);
    };

    return {
      start: startAnimation,
      stop: stopAnimation,
    };
  };

  document.addEventListener('DOMContentLoaded', () => {
    if (input) {
      const aw: AnimationWorker = createAnimationWorker(input, texts);
      aw.start();

      input.addEventListener('focus', () => aw.stop());
      input.addEventListener('blur', (e) => {
        if (e.target?.value === '') setTimeout(aw.start, 2000);
      });
    }
  });
};

export default animatePlaceholder;
