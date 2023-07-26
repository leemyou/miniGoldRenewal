var mainSwiper = new Swiper(".mySwiper", {
  // 필요없는 요소 삭제
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  pagination: {
    el: ".pagination-num",
    type: 'fraction',
      formatFractionCurrent: function (number) {
      return '0' + number;
    }
  },
});

var pagingSwiper = new Swiper('.mySwiper', {
  effect: 'fade',
  loop: true,
  pagination: {
		el: ".pagination-basic",
    // type: 'bullets',
    clickable: true,    //버튼 클릭 여부
	},
})

// Main Swiper로 basic 제어
mainSwiper.controller.control = pagingSwiper;
pagingSwiper.controller.control = mainSwiper;

// pagination에서 필요없는 요소 삭제
const slash = document.getElementById('swiperPaginationNum')
slash.innerHTML='<span class="swiper-pagination-current">01</span>'
