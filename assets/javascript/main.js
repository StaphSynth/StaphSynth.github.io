// show/hide the main menu when nav icon clicked/tapped on mobile view
(() => {
  const menuButton = document.querySelector('#nav-icon');
  const menu = document.querySelector('.menu-container');
  const caret = document.querySelector('.dropdown-caret');

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu-closed');
    caret.classList.toggle('rotate-180');
  });
})();

/*
For figure captions: centre the caption if there's only one line of text, otherwise leave it justified.
Calc: get the container height and divide by line hieght. If the answer is 1, then there's only 1 line
*/
(() => {
  document.querySelectorAll('figcaption').forEach((caption) => {
    const style = getComputedStyle(caption);
    const height = parseFloat(style.getPropertyValue('height'));
    const lineHeight = parseFloat(style.getPropertyValue('line-height'));

    if (Math.round(height / lineHeight) < 2) {
      caption.setAttribute('style', 'text-align: center;');
    }
  });
})();

