export const select = document.querySelectorAll('[data-select]');

[...select].forEach((element) => {
  const menu = element.querySelector('[data-list]');
  const caption = element.querySelector('[data-caption]');

  element.addEventListener('click', (e) => {
    const shown = element.dataset.shown === 'true';

    shown ? animateFadeOut(element, menu) : animateFadeIn(element, menu);

    if (e.target.hasAttribute('data-select-option')) {
      element.querySelector('.select').classList.remove('select');

      e.target.classList.add('select');

      caption.textContent = e.target.textContent;
    }
  });
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
