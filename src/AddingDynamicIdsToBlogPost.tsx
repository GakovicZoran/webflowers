export function setDynamicIds() {
  // Get the container element
  const container = document.querySelector('[blog-post="container"]');

  // Get all the h3 elements inside the container
  const h3Elements = container.querySelectorAll('h3');

  // Loop through each h3 element and set the ID dynamically
  h3Elements.forEach((h3, index) => {
    const id = `title-${index + 1}`;
    h3.setAttribute('id', id);
    h3.style.color = 'red';
  });
}
