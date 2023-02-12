export const likeBtn = document.querySelector('.product-selection__button');

likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('active');
});
