var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
navigation: {
  nextEl: ".swiper-btn-next",
  prevEl: ".swiper-btn-prev",
},
pagination: {
  el: ".swiper-pagination",
},
});