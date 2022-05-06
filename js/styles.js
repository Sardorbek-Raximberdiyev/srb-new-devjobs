const elDarkMore = document.querySelector('.dark-more');
const elLightMore = document.querySelector('.light-more');


elDarkMore.addEventListener('click', function () {
  document.body.classList.toggle('new-root');
});

elLightMore.addEventListener('click', function () {
  document.body.classList.toggle('new-root');
  // console.log('salom');
});

// const elChecbox = document.querySelector('.checbox');

// elChecbox.addEventListener('click', function () {
//   // console.log('salom');
//   document.body.classList.toggle('new-root');
// });