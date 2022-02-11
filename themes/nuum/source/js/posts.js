//window.addEventListener('load', (e) => {
(() => {

document.documentElement.style.overflowX = 'hidden';

const grid = document.querySelector('.details-grid');

const categoryDetails = document.querySelector('.details-grid .details-category');
const postDetails = document.querySelector('.details-grid .details-post');

const tabBodyBlock = document.querySelector('.tab-body-block');
const tabBodyBlockElements = tabBodyBlock.querySelectorAll('.tab-body');

const calcBodyH = (e) => {
  let maxHeight = 0;
  let temp = -1;
  tabBodyBlockElements.forEach((element, key, parent) => {
    element.setAttribute('style', 'display:block;');
    temp = element.offsetHeight;
    element.removeAttribute('style');
    if(temp > maxHeight) {
      maxHeight = temp;
    }
    console.log(`Tab Body ${key}: ${temp}`);
  });
  tabBodyBlock.setAttribute('style', 'height: '+maxHeight+'px;');
};

const calcH = (e) => {
  const heights = [categoryDetails.offsetHeight, postDetails.offsetHeight];
  grid.setAttribute('style', 'height: '+ (heights[0] > heights[1] ? heights[0] : heights[1]) + 'px;');
};

const calcAll = (e) => {
  calcBodyH();
  calcH();
}

window.addEventListener('load', calcAll);

window.addEventListener('resize', calcAll);

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