/* Mobile */
const hand = document.querySelector('.nav-hand');
const nav = document.querySelector('nav');

let op = false;

hand.addEventListener('click', (e)=>{
  op = !op;
  if(op) {
    nav.classList.add('open');
  } else {
    nav.classList.remove('open');
  }
  document.documentElement.style.overflowY = op? 'hidden':'scroll';
});


/* Main Head & Transparent*/
window.addEventListener("load", function() {
  //(() => {
    const navbar = document.getElementById("theme-nav");
  
    const gnbShowingAt = navbar.offsetHeight;
  
    const mainHead = document.getElementById("main-head");
    if (!mainHead) {
      navbar.classList.remove("--transparent", "--no-logo");
      return;
    }
    
    const headNoLogo = mainHead.classList.contains('--head-no-logo');
    if(!headNoLogo) navbar.classList.remove('--no-logo');
  
    const detect = scrollY => {
      if (scrollY < gnbShowingAt) {
        if(headNoLogo) navbar.classList.add("--transparent", "--no-logo");
        else navbar.classList.add('--transparent')
      } else {
        if(headNoLogo) navbar.classList.remove("--transparent", "--no-logo");
        else navbar.classList.remove('--transparent');
      }
    };
  
    detect(window.scrollY);
  
    window.addEventListener("scroll", function(e) {
      detect(window.scrollY);
    });
  //})();
  });
  
  //window.addEventListener("load", function() {
  (() => {
    const navbar = document.getElementById("navbar");
    const searchOpenBtn = document.getElementById('navbar-search-button');
    const searchCloseBtn = document.getElementById('navbar-search-close-button');
    const searchInput = document.getElementById('navbar-search-input');
    
    const openSearch = () => {
      navbar.classList.add('--search');
      searchInput.focus();
    };
    const closeSearch = () => {
      navbar.classList.remove('--search');
    };
    
    searchOpenBtn.addEventListener('click', openSearch);
    searchCloseBtn.addEventListener('click', closeSearch);
  
  })();
  //});
  