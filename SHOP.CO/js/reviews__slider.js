export const reviewsSlider = () => {
  const slider = document.querySelector('.reviews__slider');
  if (!slider) return;

  const wrapper = slider.querySelector('.swiper-wrapper');
  wrapper.innerHTML += wrapper.innerHTML;

  new Swiper(".reviews__slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".reviews__slider-button--prev",
      nextEl: ".reviews__slider-button--next",
    },
  });
};