const userDarkmode = localStorage.getItem('color-theme');
const osDarkmode = window.matchMedia('(prefers-color-scheme: dark').matches ? "dark" : "light";

var mode = userDarkmode ? userDarkmode : osDarkmode;

const isDark = () => {
  if(mode === 'dark') {
    return true;
  } else {
    return false;
  }
}

const switchColorTheme = () => {
  mode = (mode == 'dark') ? 'light' : 'dark';
  localStorage.setItem('color-theme', mode);
  if(isDark()) {
    document.documentElement.setAttribute('dark', '')
  } else {
    document.documentElement.removeAttribute('dark');
  }
};

const $switcher = document.querySelector('.nav-mode-switch');

$switcher.addEventListener('click', e => {
  switchColorTheme();
});

(()=>{
  console.log(`darkMode: ${mode}`)
  if(isDark()) {
    document.documentElement.setAttribute('dark', '')
  } else {
    document.documentElement.removeAttribute('dark');
  }
})();