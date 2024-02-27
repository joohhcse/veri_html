AOS.init({
  once: true,
  disable: 'phone',
  duration: 750,
  easing: 'ease-out-quart',
});

const carouselEl = document.querySelectorAll('.carousel');

const carouselDiv = document.getElementById('carouselDiv');
const arrowsBtnPrev = document.getElementById('arrowsBtnPrev');
const arrowsBtnNext = document.getElementById('arrowsBtnNext');

if (carouselEl.length > 0) {
  const carousel = new Swiper('.carousel', {
    slidesPerView: 'auto',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    initialSlide: 0,
    spaceBetween: 24,
    autoplay: {
      delay: 40000,  //7000
      disableOnInteraction: false, // 자동 재생이 사용자 상호 작용으로 중지되지 않도록 설정
    },
    navigation: {
      nextEl: '.carousel-next',
      prevEl: '.carousel-prev',
    },
  });

  carouselDiv.addEventListener('mouseover', () => {
    carousel.autoplay.stop();
  });
  carouselDiv.addEventListener('mouseout', () => {
    carousel.autoplay.start();
  });

  arrowsBtnPrev.addEventListener('mouseover', () => {
    carousel.autoplay.stop();
  });
  arrowsBtnPrev.addEventListener('mouseout', () => {
    carousel.autoplay.start();
  });

  arrowsBtnNext.addEventListener('mouseover', () => {
    carousel.autoplay.stop();
  });
  arrowsBtnNext.addEventListener('mouseout', () => {
    carousel.autoplay.start();
  });

}


// Light switcher
const lightSwitches = document.querySelectorAll('.light-switch');
if (lightSwitches.length > 0) {
  lightSwitches.forEach((lightSwitch, i) => {
    if (localStorage.getItem('dark-mode') === 'true' || !('dark-mode' in localStorage)) {
      // eslint-disable-next-line no-param-reassign
      lightSwitch.checked = true;
    }
    lightSwitch.addEventListener('change', () => {
      const { checked } = lightSwitch;
      lightSwitches.forEach((el, n) => {
        if (n !== i) {
          // eslint-disable-next-line no-param-reassign
          el.checked = checked;
        }
      });
      if (lightSwitch.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark-mode', true);
      } else {
        document.documentElement.classList.remove('dark');
        // localStorage.setItem('dark-mode', false);  //remove
        localStorage.setItem('dark-mode', true);
      }
    });
  });
}
