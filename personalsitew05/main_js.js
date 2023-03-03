const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    nav.style.opacity = 0.8;
  } else {
    nav.style.opacity = 1;
  }
});