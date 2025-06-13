$(document).ready(function(){ //시작

  $(".search").click(function(){
    $(".search01").fadeIn();
  });

  $(".search-close").click(function(){
    $(".search01").fadeOut();
  }); 



  AOS.init();


  var sview = new Swiper(".s-view", {
    loop: true,
    slidesPerView: 1,
  });

  var slist = new Swiper(".s-list", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: sview,
    },
  });

  var gift = new Swiper(".g-view", {
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      765: {
        slidesPerView: 4,
        spaceBetween: 28,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 28,
      },
    },

  });

  var card = new Swiper(".c-view", {
    loop: true,
    speed: 1000,
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
    delay: 2000,
  },

  });

  var coffee = new Swiper(".b-view", {
    loop: true,
    speed: 1000,
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true, // 첫번째 슬라이드가 정중앙에

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var hangang = new Swiper(".h-view", {
    spaceBetween: 0,
    slidesPerView: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  
}); //실행틀 끝