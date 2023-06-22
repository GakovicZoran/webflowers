export const underlineAnimation = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const anchorElements = document.querySelectorAll('a[animation-underline="primary"]');
    const navigationAnchorElements = document.querySelectorAll('a[navigation="anchor"]');
    navigationAnchorElements.forEach(function (anchorElement) {
      const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svgElement.setAttribute('viewBox', '0 0 455.555 32');

      const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path1.setAttribute(
        'd',
        'M0 1c37.962 0 37.962 28 75.924 28s37.962-28 75.924-28 37.962 28 75.923 28c37.962 0 37.962-28 75.925-28 37.965 0 37.965 28 75.929 28s37.965-28 75.93-28',
      );

      // Create the second path element
      const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path2.setAttribute(
        'd',
        'M0 1c37.962 0 37.962 28 75.924 28s37.962-28 75.924-28 37.962 28 75.923 28c37.962 0 37.962-28 75.925-28 37.965 0 37.965 28 75.929 28s37.965-28 75.93-28',
      );

      svgElement.appendChild(path1);
      svgElement.appendChild(path2);

      anchorElement.appendChild(svgElement);
    });

    anchorElements.forEach(function (anchorElement) {
      const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svgElement.setAttribute('viewBox', '0 0 455.555 32');

      const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path1.setAttribute(
        'd',
        'M0 1c37.962 0 37.962 28 75.924 28s37.962-28 75.924-28 37.962 28 75.923 28c37.962 0 37.962-28 75.925-28 37.965 0 37.965 28 75.929 28s37.965-28 75.93-28',
      );

      // Create the second path element
      const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path2.setAttribute(
        'd',
        'M0 1c37.962 0 37.962 28 75.924 28s37.962-28 75.924-28 37.962 28 75.923 28c37.962 0 37.962-28 75.925-28 37.965 0 37.965 28 75.929 28s37.965-28 75.93-28',
      );

      // Append the path elements to the SVG element
      svgElement.appendChild(path1);
      svgElement.appendChild(path2);

      // Append the SVG element to the anchor element
      anchorElement.appendChild(svgElement);
    });
  });
};
