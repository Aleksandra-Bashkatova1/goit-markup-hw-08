(() => {
  const refs = {
    openMenuBtn: document.querySelector('.open__menu--mob'),
    closeMenuBtn: document.querySelector('.close__menu--mob'),
    menu: document.querySelector('.mob__menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();