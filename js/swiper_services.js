let servicesSwiper = new Swiper(".services-slider", {
  wrapperClass: "services-slider__wrapper",
  slideClass: "services-slider__slide",

  navigation: {
    nextEl: ".services__btn-next",
    prevEl: ".services__btn-prev",
  },

  pagination: {
    el: ".services-slider__pagination",
    type: "bullets",
    clickable: true,
  },

  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 35,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },

  a11y: {
    prevSlideMessage: "Предыдущие события",
    nextSlideMessage: "Следующие события",
    slideLabelMessage: "{{index}} из {{slidesLength}}",
    paginationBulletMessage: "Перейти к событиям {{index}}",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  watchSlidesProgress: true,
  slideVisibleClass: "swiper-slide-visible",
  on: {
    init: function () {
      this.slides.forEach(function (slide) {
        let slideLinks = slide.querySelector(".article__link");
        if (!slide.classList.contains("swiper-slide-visible")) {
          slide.tabIndex = "-1";
          slideLinks.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
          slideLinks.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(function (slide) {
        let slideLinks = slide.querySelector(".article__link");
        if (!slide.classList.contains("swiper-slide-visible")) {
          slide.tabIndex = "-1";
          slideLinks.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
          slideLinks.tabIndex = "";
        }
      });
    },
  },
});
