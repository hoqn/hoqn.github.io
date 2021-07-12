(() => {
const sidebarParent = document.querySelector('.article-dis');
const sidebar = document.getElementById('article-sidebar');
const sidecard = document.querySelector('#article-sidebar .ui-card');
const barY = sidebar.offsetTop - 56 - 16 - 64;

function offset(element) {
  const rect = element.getBoundingClientRect();
  const body = document.documentElement;
  return {
    top: rect.top + body.scrollTop,
    bottom: rect.bottom + body.scrollTop,
    height: rect.height
  }
}

const sidebarOffset = offset(sidecard);
const parentOffset = offset(sidebarParent);
const top = sidebarOffset.top - 72;// - 64;

let fixedSidecardHeight = -1;
let maxY = parentOffset.bottom - sidecard.offsetHeight - 72;

let updateFixedSidecardHeight = (value) => {
  fixedSidecardHeight = value;
  maxY = parentOffset.bottom - value - 72;
}; 

function stickyArticleSidebar(e) {
  /*let scrollY = window.scrollY;

  console.log(`${scrollY}, ${barY}`);

  if(barY > scrollY) {
    sidebar.classList.remove('fixed');
    sidebar.classList.remove('show-title');
  } else {
    sidebar.classList.add('fixed');
    sidebar.classList.add('show-title');
  }*/

  
  if(sidebar.style.display == 'none') {
    return;
  }

  let y = document.scrollingElement.scrollTop;
  //console.log(`Y: ${y}, top: ${top}, maxY: ${maxY}, sidebarHeight: ${sidebar.offsetHeight}, parentHeight: ${parentOffset.height}, fixedHeight: ${fixedSidecardHeight}`);
  if(y > top) {
    if(y < maxY) {
      sidebar.classList.add('fixed');
      sidebar.classList.add('show-title');
      sidecard.removeAttribute('style');
      if(fixedSidecardHeight < 0) {
        updateFixedSidecardHeight(sidecard.offsetHeight);
      }
    } else {
      //sidebar.classList.remove('fixed');
      //sidebar.classList.remove('show-title');
      sidecard.setAttribute('style', `position: absolute; top: ${maxY + 72}px`);
    }
  } else {
    sidebar.classList.remove('fixed');
    sidebar.classList.remove('show-title');
  }
}

window.addEventListener('load', (e) => {
  stickyArticleSidebar('');
  window.addEventListener('scroll', stickyArticleSidebar);
});

window.addEventListener('resize', stickyArticleSidebar);

})();