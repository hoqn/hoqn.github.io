(
  () => {

    const userDarkmode = localStorage.getItem('color-scheme');
    const osDarkmode = window.matchMedia('prefers-color-scheme: dark').matches ? 'dark' : 'light';
    
    let mode = userDarkmode ? userDarkmode : osDarkmode;

    const isDark = () => mode === 'dark' ? true : false;

    const switchScheme = () => {
      // Switch
      mode = isDark() ? 'light' : 'dark';
      localStorage.setItem('color-scheme', mode);
      if(isDark())
        document.documentElement.setAttribute('dark', 'dark');
      else
        document.documentElement.removeAttribute('dark');
    }

    window.addEventListener('load', () => {
      const $switch = document.querySelector('#color-scheme-switch');
      $switch.addEventListener('click', e => {
        switchScheme();
      });
    });

    if(isDark())
      document.documentElement.setAttribute('dark', 'dark');
    else
      document.documentElement.removeAttribute('dark');


  }
)();