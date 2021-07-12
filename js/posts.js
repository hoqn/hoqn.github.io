//window.addEventListener('load', (e) => {
(() => {

document.documentElement.style.overflowX = 'hidden';

const grid = document.querySelector('.details-grid');

const categoryDetails = document.querySelector('.details-grid .details-category');
const postDetails = document.querySelector('.details-grid .details-post');

const calcH = (e) => {
  const heights = [categoryDetails.offsetHeight, postDetails.offsetHeight];
  grid.setAttribute('style', 'height: '+ (heights[0] > heights[1] ? heights[0] : heights[1]) + 'px;');
};

calcH();

window.addEventListener('resize', calcH);

const expandLeftButton = document.querySelector('.details-grid .details-post .expand-menu');
expandLeftButton.addEventListener('click', (e) => {
  document.querySelector('.details-grid').classList.add('left-expand');
});
const closeLeftButton = document.querySelector('.details-grid .details-category .close-menu');
closeLeftButton.addEventListener('click', (e) => {
  document.querySelector('.details-grid').classList.remove('left-expand');
});

})();
//});