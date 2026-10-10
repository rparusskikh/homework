export const reviewsSlider = () => {
  new Swiper(".reviews__slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 3,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".reviews__slider-button--prev",
      nextEl: ".reviews__slider-button--next",
    },
  });
};