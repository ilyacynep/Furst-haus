import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

var path_html = window.location.pathname;
var page_html = path_html.split("/").pop();



var page_index = 0;
var swiper_page, swiper_subtitle;
var page = [1, 2, 3];
var name = ["Terrasse", "Eingang", "Vorderansicht"];

window.onload = function () {
  let preloader = document.querySelector(".preloader");
  preloader.style.opacity = 0;
  var body = document.body;
  var html = document.getElementsByTagName("html")[0];;
  html.classList.remove("--block")
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".preloader", {
    scrollTrigger: {
      trigger: ".animation-0",
      start: "top +=700",
      toggleActions: "play none none none"
    },
    display: "none",
    duration: 1
  })
  gsap.to(".header", {
    scrollTrigger: {
      trigger: ".animation-0",
      start: "top +=700",
      toggleActions: "play none none none"
    },
    top: 0,

    duration: 0.7
  })
  if (page_html == "" || page_html == "index.html") {
    gsap.to(".info-item", {
      scrollTrigger: {
        trigger: ".info-item",
        start: "top +=700",
        toggleActions: "play none none none"
      },
      scale: 1,
      delay: 1,
      duration: 1
    })
    gsap.to(".col-main__foreword", {
      scrollTrigger: {
        trigger: ".animation-0",
        start: "top +=700",
        toggleActions: "play none none none"
      },
      translateX: 0,
      delay: 1,
      duration: 1
    })
    gsap.to(".col-main__title", {
      scrollTrigger: {
        trigger: ".animation-0",
        start: "top +=700",
        toggleActions: "play none none none"
      },
      opacity: 1,
      translateY: 0,
      delay: 1,
      duration: 1

    })
    gsap.to(".col-main__promise", {
      scrollTrigger: {
        trigger: ".animation-0",
        start: "top +=700",
        toggleActions: "play none none none"
      },
      opacity: 0.8,
      delay: 2,
      translateY: 0,
      duration: 1
    })
    gsap.to(".col-main__button", {
      scrollTrigger: {
        trigger: ".animation-0",
        start: "top +=700",
        toggleActions: "play none none none"
      },
      opacity: 1,
      delay: 2,
      translateY: 0,
      duration: 1
    })
    gsap.to(".about-content__col", {
      scrollTrigger: {
        trigger: ".about-content__col",
        start: "top +=700",
        toggleActions: "play none none none"
      },
      opacity: 1,
      translateX: 0,
      duration: 1
    })
    gsap.to(".advantages-item", {
      scrollTrigger: {
        trigger: ".advantages-item",
        start: "top +=800",
        toggleActions: "play none none none"
      },
      opacity: 1,
      duration: 1
    })

    gsap.to(".history-list__item", {
      scrollTrigger: {
        trigger: ".history-list__item",
        start: "top +=1200",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 1
    })
    gsap.to(".history-button", {
      scrollTrigger: {
        trigger: ".history-button",
        start: "top +=900",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 1
    })
    gsap.to(".certificates-col__image", {
      scrollTrigger: {
        trigger: ".certificates-col__image",
        start: "top +=1100",
        toggleActions: "play none none none"
      },
      opacity: 1,
      scale: 1,
      duration: 1
    })

  } else if (page_html == "houses.html") {

    adaptive_arrows();
  }

  //
  //certificates-col__image
  //partners-content__col


}

document.addEventListener("DOMContentLoaded", (e) => {
  var header_feedback = document.querySelector(".header-feedback");
  var dialog = document.querySelector(".dialog");
  var body = document.body;
  var html = document.getElementsByTagName("html")[0];;
  var dialog_bckgr = document.querySelector(".dialog-background");
  var dialog_close = document.querySelector(".dialog-close");
  var swiper_button_next = document.querySelector(".swiper-button-next");
  var swiper_button_prev = document.querySelector(".swiper-button-prev");
  var dialog_close = document.querySelector(".dialog-close");
  swiper_page = document.querySelector(".swiper-page");
  swiper_subtitle = document.querySelector(".swiper-subtitle");
  header_feedback.addEventListener("click", (e) => {
    html.classList.add("--block")
    dialog.classList.add("--active")
    dialog_bckgr.classList.add("--active")
  })
  dialog_close.addEventListener("click", (e) => {
    dialog.classList.remove("--active")
    html.classList.remove("--block")
    dialog_bckgr.classList.remove("--active")
  })
  var about = document.querySelector(".about");
  var button = document.querySelector(".col-main__button");
  var button = document.querySelector(".col-main__button");

  var header_burger = document.querySelector(".header-burger");
  var burger = document.querySelector(".burger");
  header_burger.addEventListener("click", (e) => {
    if (header_burger.classList.contains("header-burger--active")) {
      header_burger.classList.remove("header-burger--active");
      burger.classList.remove("_active");
    } else {
      header_burger.classList.add("header-burger--active");
      burger.classList.add("_active");
    }
  })
  if (page_html == "" || page_html == "index.html") {
    var mySwiperr = new Swiper('.mySwiper', {
      spaceBetween: 30, // ???????????????????? ?????????? ????????????????????
      // slidesPerView: 1.69, // ???????????? ???????????????? 
      slidesPerView: 3,
      autoHeight: true,
      autoWeight: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      watchOverflow: true,
      centeredSlides: true,  // ?????????????????????????? ????????????
      breakpoints: { // Breakpoint ???????????????? ???????????? swiper ????????????????????
        0: {
          slidesPerView: 1,
        },
        666: {
          slidesPerView: 1.4,
        },
        768: {
          slidesPerView: 1.6,
        },
        1000: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2.5,
        },
        1300: {
          slidesPerView: 2.7,
        },
        1500: {
          slidesPerView: 3,
        },
        1700: {
          slidesPerView: 3.5,
        },
        1800: {
          slidesPerView: 3.7,
        },
      },

    })
    var col_main_button = document.querySelector(".col-main__button");

    col_main_button.addEventListener("click", (e) => {

      const scrollTarget = document.querySelector(".about");

      const topOffset = document.querySelector('.about').offsetHeight;
      // const topOffset = 0; // ???????? ???? ?????????? ???????????? ???????????? 
      const elementPosition = scrollTarget.getBoundingClientRect().top - 80;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
      });
    })

    let center = [53.338764, 9.875054];

    function init() {
      let map = new ymaps.Map('map-test', {
        center: center,
        zoom: 17
      });

      map.controls.remove('geolocationControl'); // ?????????????? ????????????????????
      map.controls.remove('searchControl'); // ?????????????? ??????????
      map.controls.remove('trafficControl'); // ?????????????? ???????????????? ??????????????
      map.controls.remove('typeSelector'); // ?????????????? ??????
      map.controls.remove('fullscreenControl'); // ?????????????? ???????????? ???????????????? ?? ?????????????????????????? ??????????
      map.controls.remove('zoomControl'); // ?????????????? ?????????????? ????????????????????????
      map.controls.remove('rulerControl'); // ?????????????? ?????????????? ????????????
      map.behaviors.disable(['scrollZoom']); // ?????????????????? ???????????? ?????????? (??????????????????????)
    }

    ymaps.ready(init);
  }
  if (page_html == "houses.html") {

    var descr_two_item = document.querySelectorAll(".descr-two__item");
    var info1 = document.querySelector(".info-1");
    var info2 = document.querySelector(".info-2");
    descr_two_item.forEach((el, index) => {
      el.addEventListener("click", (e) => {
        info1.classList.remove("info--active");
        info2.classList.remove("info--active");
        if (index == 0) {
          info1.classList.add("info--active");
        }
        if (index == 1) {
          info2.classList.add("info--active");
        }
        var current = e.currentTarget;
        descr_two_item.forEach(remove_el => {
          remove_el.classList.remove("tab-active")
        })
        current.classList.add("tab-active")
      })
    });

    var col_down_button = document.querySelector(".col-down__button");
    col_down_button.addEventListener("click", (e) => {

      const scrollTarget = document.querySelector(".houses-descr");
      const topOffset = document.querySelector('.houses-descr').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top - 80;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
      });
    })

    var video_inside = document.querySelector(".video-inside");
    var video = document.querySelector(".houses-video__video");
    var video_btn = document.querySelector(".houses-video__video-pause");

    video_inside.addEventListener("click", (e) => {
      if (video.paused) {
        video_btn.style.display = "none";
        video.play();
      } else {
        video_btn.style.display = "block";
        video.pause();
      }
    })
  }

})


if (page_html == "houses.html") {
  addEventListener("resize", (e) => {
    adaptive_arrows();
  })
  addEventListener("scroll", (e) => {
    adaptive_arrows();
  })
  addEventListener("click", (e) => {
    adaptive_arrows();
  })
}



function adaptive_arrows() {
  var slide = document.querySelectorAll(".swiper-slide");
  var size = window.innerWidth;
  if (size <= 780) {
    slide.forEach(element => {
      element.classList.add("container")
    });
  }
  var cont_buttons = document.querySelector(".swiper-buttons");
  var active_slide = document.querySelector(".swiper-slide");
  cont_buttons.style.minWidth = active_slide.offsetWidth + 250 + "px";
}


if (page_html == "houses.html") {
  // !!! ?????? ???????????? ???? swiper ???????????? ???????????????? ???????? ?????????????? ???????????? ?? css
  $(document).ready(function () {

    var mySwiper = new Swiper('.swiper-container', {
      spaceBetween: 170, // ???????????????????? ?????????? ????????????????????
      // slidesPerView: 1.69, // ???????????? ???????????????? 
      breakpoints: { // Breakpoint ???????????????? ???????????? swiper ????????????????????
        310: {  // 310 - ????????????????????, ?????? ?????????????? ?????????? ?????????????????????? ??????????????????
          slidesPerView: 1,
        },
        1025: {
          slidesPerView: 1.69,
        },
      },
      autoHeight: true,  // ???????? ???????????? ????????????????

      watchOverflow: true,
      centeredSlides: true,  // ?????????????????????????? ????????????
      navigation: {   // ?? ?????????????? navigation ???????????????? ????????????, ?????????????? ???????????? ?????????????????????? ????????????
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })

    mySwiper.on('slideChange', function (e) { // ?????????????????? ???????????????????????? ??????????????
      page_index = mySwiper.activeIndex;
      changetext();
      adaptive_arrows();
    });
  });
  function changetext() {
    swiper_subtitle.innerHTML = name[page_index];
    swiper_page.innerHTML = "0" + page[page_index] + "<span>| 03</span>";
  }
}

