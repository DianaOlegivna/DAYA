import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

export function initSwiper() {
  const swiperProjects = new Swiper('.projects-swiper', {
    modules: [Navigation, Keyboard],
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: '.projects-next',
      prevEl: '.projects-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    grabCursor: true,
    breakpoints: {
      1440: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    on: {
      init(swiper) {
        updateButtons(swiper, '.projects-prev', '.projects-next');
      },
      slideChange(swiper) {
        updateButtons(swiper, '.projects-prev', '.projects-next');
      },
    },
  });

  const swiperReviews = new Swiper('.reviews-swiper', {
    modules: [Navigation, Keyboard],
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: '.reviews-next',
      prevEl: '.reviews-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    grabCursor: true,
    
    on: {
      init(swiper) {
        updateButtons(swiper, '.reviews-prev', '.reviews-next');
      },
      slideChange(swiper) {
        updateButtons(swiper, '.reviews-prev', '.reviews-next');
      },
    },
  });
    
    function updateButtons(swiper, prevSelector, nextSelector) {
        const prevButton = document.querySelector(prevSelector);
        const nextButton = document.querySelector(nextSelector);

        if (!prevButton || !nextButton) return;
  
        prevButton.disabled = swiper.isBeginning;
        nextButton.disabled = swiper.isEnd;
    }
}

