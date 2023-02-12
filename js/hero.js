export const swiper = new Swiper('.hero-swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.hero-box__btn-next',
    prevEl: '.hero-box__btn-prew',
  },
});
