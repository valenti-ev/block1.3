const mobile = window.matchMedia("(min-width: 320px) and (max-width: 767px)");
const desktop = window.matchMedia("(min-width: 768px) and (max-width: 2560px)");

const list = document.querySelector(".swiper-wrapper");
const button = document.querySelector(".more");
const text = document.querySelector(".more__button");
const cursor = document.querySelector(".more__cursor");
function swiperInit() {
  const swiper = new Swiper(".swiper-container", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  return swiper;
}

/* On Load
 **************************************************************/
window.addEventListener("load", function () {
  if (mobile.matches) {
    list.classList.add("swiper-wrapper");
    swiperInit();
  }

  if (desktop.matches) {
    list.classList.add("swiper-wrapper");
    const slider = swiperInit();
    slider.destroy();
    // добавляем гриды
    list.classList.add("brand-list");
    list.classList.remove("swiper-wrapper");
    // скрываем часть блока
    list.classList.add("overflow-block");
  } else {
    list.classList.remove("brand-list");
    list.classList.remove("overflow-block");
  }
});

/* On Resize
 **************************************************************/
window.addEventListener("resize", function () {
  if (mobile.matches) {
    list.classList.add("swiper-wrapper");
    swiperInit();
  }

  if (desktop.matches) {
    list.classList.add("swiper-wrapper");
    const slider = swiperInit();
    slider.destroy();
    // добавляем гриды
    list.classList.add("brand-list");
    list.classList.remove("swiper-wrapper");
    // скрываем часть блока
    list.classList.add("overflow-block");
  } else {
    list.classList.remove("brand-list");
    list.classList.remove("overflow-block");
  }
});

button.addEventListener("click", function () {
  if (list.classList.contains("add-width")) {
    list.classList.remove("add-width");
    text.innerHTML = "<p class='more__button'>Показать все</p>";
    cursor.classList.remove("more__cursor__active");
  } else {
    list.classList.add("add-width");
    text.innerHTML = "<p class='more__button'>Скрыть</p>";
    cursor.classList.add("more__cursor__active");
  }
});
