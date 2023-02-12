export const citySelect = document.querySelector('.header-left__seleсt');
const cityMenu = document.querySelector('.header-left__list');
const p = citySelect.querySelector('[data-select]');

citySelect.addEventListener('click', (e) => {
  const shown = citySelect.dataset.shown === 'true';

  shown
    ? animateFadeOut(citySelect, cityMenu)
    : animateFadeIn(citySelect, cityMenu);

  if (e.target.hasAttribute('data-select-option')) {
    citySelect
      .querySelector('.header-left__item.select')
      .classList.remove('select');

    e.target.classList.add('select');

    p.textContent = e.target.textContent;
  }
});

function animateFadeIn(element, menu) {
  menu.style.display = 'block';

  requestAnimationFrame(() => {
    element.setAttribute('data-shown', 'true');
  });
}

function animateFadeOut(element, menu) {
  element.setAttribute('data-shown', 'false');

  const transition = addEventListenerWithDispose(
    element,
    'transitionend',
    handleFadeOut
  );

  function handleFadeOut() {
    menu.style.display = 'none';
    transition();
  }
}

function addEventListenerWithDispose(element, name, handler) {
  element.addEventListener(name, handler);
  return () => element.removeEventListener(name, handler);
}
