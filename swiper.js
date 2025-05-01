var swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullests: true,
    clickable: true,
  },
  autoplay:{
    delay:2500,
    },
    loop:true,
});
var swiper = new Swiper(".sale-sec", {
  slidesPerView: 4,
  spaceBetween:30,
  autoplay:{
  delay:3000,
  },
  navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev",
  },
  loop:true,
  breakpoints:{
    1600:{
      slidesPerView: 4,
    },
    1200:{
      slidesPerView: 4,
      spaceBetween:30,
    },
    700:{
      slidesPerView: 3,
      spaceBetween:15,
    },
    0:{
      slidesPerView: 2,
      spaceBetween:10,
    },
  }
});
var swiper = new Swiper(".pr", {
  slidesPerView: 3,
  spaceBetween:30,
  autoplay:{
  delay:3000,
  },
  navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev",
  },
  loop:true,
});