import outsideClick from './outsideClick.js';

export default function initMenu() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  if(menuButton) {
    // eslint-disable-next-line no-inner-declarations
    function openMenu() {
      menuList.classList.add('active');
      menuButton.classList.add('active');
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
      })
    }
    eventos.forEach(event => menuButton.addEventListener(event, openMenu));
  }
}