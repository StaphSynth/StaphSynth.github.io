/*show/hide the main menu when nav icon clicked/tapped on mobile view
also blurs the button after event and rotates the menu direction caret*/
// $('#nav-icon').click(function(event) {
//   $('#main-menu ul').slideToggle('fast','swing');
//   $('#nav-icon').blur();
//   $('.fa-caret-down').toggleClass('fa-rotate-180');
// });

(function() {
  const navIcon = document.querySelector('#nav-icon');

  const toggleMenuVisibility = event => {
    console.log(event.type);
    event.stopPropagation();
    const menu = document.querySelector('#main-menu ul');

    if (!menu.style.display || menu.style.display === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }

  navIcon.addEventListener('click', toggleMenuVisibility);
  navIcon.addEventListener('touchstart', toggleMenuVisibility);
  // navIcon.addEventListener('touchend', (e) => e.preventDefault());
}());

/*
  For figure captions: centre the caption if there's only one line of text, otherwise leave it justified.
  Calc: get the container height and divide by line hieght. If the answer is 1, then there's only 1 line
*/
(function() {
  const captions = document.querySelectorAll('#caption');

  captions.forEach(caption => {
    const height = caption.clientHeight;
    const lineHeight = parseFloat(caption.style.lineHeight);

    if (Math.round(height / lineHeight) < 2) {
      caption.style.textAlign = 'center';
    }
  });
}());


(function() {
  window.addEventListener('resize', event => {
    if (event.target.innerWidth >= 800) {
      document.querySelector('#main-menu ul').removeAttribute('style');
    }
  });
}());
