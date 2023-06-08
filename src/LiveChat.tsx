export function setButtonBackgroundColorToRed(): void {
  const elements = document.querySelectorAll(
    '.tawk-custom-color, .tawk-custom-border-color, .tawk-button, .tawk-button-circle, .tawk-button-large',
  );

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i] as HTMLElement;
    element.style.backgroundColor = 'red';
  }
}
