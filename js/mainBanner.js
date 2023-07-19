
// window.onload = function () {
//     // $('.front-text')[0].innerHTML = '바보';

// }

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true, // infinity
    spaceBetween: 30,

    autoplay: {
        delay: 5000,
    },
  
    // pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  
  });

  window.onload = function () {
    $('.test')[0].innerHTML = '123';

    console.log($(".swiper-slide-active").val());
    

}