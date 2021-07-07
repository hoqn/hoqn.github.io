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
