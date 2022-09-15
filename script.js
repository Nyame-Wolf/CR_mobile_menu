const openToggle = document.querySelector('.menu-bars');
const title = document.getElementById('logo');
const mobileLinks = document.getElementById('mobile-links');

openToggle.addEventListener('click', () => {
  mobileLinks.classList.toggle('open');
  openToggle.style.display = 'none';
  title.style.display = 'none';
});
// mobileLinks.addEventListener('click', () => {
//   openToggle.style.display = 'block';
//   title.style.display = 'block';
//   mobileLinks.classList.toggle('open');
// });