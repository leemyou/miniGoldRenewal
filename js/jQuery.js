$(function(){

  // 네비게이션 바
  // $(window).resize(function(){ 
  media();
  function media(){
    const ww = $(window).width(); 
    if (ww > 1024) {  // 다바이스 크기가 1024이상일때 
      // 메뉴
      $('.menu-wrap > li').mouseenter(function(){
        if($(this).children().hasClass("sub-menu")) {   // 서브메뉴가 존재한다면,
          $(this).stop().children(".sub-menu").animate({
            height: 'show', 
            width:'100%', 
            opacity:"show"
          }, 300)
          $(this).stop().children(".sub-menu").fadeIn(500);
          $('#globalnav-curtain').fadeIn();
          $('html, body').css({'overflow': 'hidden'});
          $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
          });
        }
        else{   // 서브메뉴가 없다면,
          $(".sub-menu").fadeOut(500);
          $('#globalnav-curtain').stop().fadeOut();
          $('body').off('scroll touchmove mousewheel');
        }
      });

      // 서브메뉴 커서 out
      $('.sub-menu').mouseleave(function(){
        $(this).stop().animate({
          height: 'hide',
          width:'100%', 
          opacity:"show"
        }, 300);
        $(this).stop().fadeOut(300);
        $('#globalnav-curtain').stop().fadeOut();
        $('html, body').css({'overflow': 'auto'});
        $('body').off('scroll touchmove mousewheel');
      })
  } 
  // 모바일
  else {
    // 메뉴 오픈
    $('.btn-mobile-menu').click(function(){
      $('.mobile-menu-white-box').stop().animate({
        height: 'show', 
        width:'100%', 
        opacity:"show"
      }, 300)
      $('.mobile-menu-white-box').fadeIn(500);
      $('#globalnav-curtain').fadeIn();
      $('html, body').css({'overflow': 'hidden'});
      $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    });
    // 서브 메뉴 오픈&닫기
    $('.mobile-menu-wrap > li').click(function(){
      if($(this).children().hasClass('mobile-sub-menu')){
        $(this).children(".mobile-sub-menu").toggle("slow");
        $('.mobile-other-menu-container').toggle(300);
        $(this).find('.icon-inner').css({transform:'rotate(45deg)'})
      }
    });
        

    
    // 메뉴 닫기
    // .globalnav-menu .btn-mobile-delete
    $('.btn-mobile-delete, #globalnav-curtain').click(function(){
      $('.mobile-menu-white-box').stop().animate({
        height: 'hide',
        width:'100%', 
        opacity:"show"
      }, 300);
      $('.mobile-menu-white-box').stop().fadeOut(300);
      $('#globalnav-curtain').stop().fadeOut();
      $('html, body').css({'overflow': 'auto'});
      $('body').off('scroll touchmove mousewheel');
    })
  }
}

  // 화면 사이즈에 따른 반응형
  $(window).resize(function(){ 
    ww = $(window).width(); 
    media();
  });

// }).resize(); 


  // 아이콘 메뉴
  $('.icon-wrap > li').click(function(){
    // 이전에 있던 메뉴 닫기
    $('.sub-menu').stop().animate({
      height: 'hide',
      width:'100%', 
      opacity:"show"
    });
    $('.sub-menu').stop().fadeOut(300);
    // 메뉴 열기
    $(this).stop().children(".sub-menu").animate({
      height: 'show', 
      width:'100%', 
      opacity:"show"
    }, 300)
    $(this).stop().children(".sub-menu").fadeIn(500);
    $('#globalnav-curtain').fadeIn();
    $('html, body').css({'overflow': 'hidden'});
    $('body').on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
  })




    // deliver-celeb

    const deliver_celeb_items = $(".item-container > a").get();   // 아이템 배열(4개)
    // 글자 버튼 클릭
    $('.btn-deliver-celeb').on('click', function(){
      const thisBtn = $(this).attr('id').toLocaleLowerCase().split("btn")[1]

      // class 활성화
      $('.btn-deliver-celeb').removeClass("active");
      $(this).addClass("active");

      // 이미지 변경
      if($("#btnDeliver").hasClass("active")){    // QUICK DELIVERY이 활성화 되어있다면,
        $.each (deliver_celeb_items, function(i, el){
          $(this).find('img').attr("src", `../img/delivery0${i+1}.png`);
        })
      }
      else{   // CELEB이 활성화 되어있다면,
        $.each (deliver_celeb_items, function(i, el){
          // TODO: 위에처럼 변경바람
          $(this).find('img').attr("src", `../img/celeb0${i+1}.png`);
        })
      }

      // 글자 변경
      $.getJSON('../documents/deliver-celeb-items-list.json', function(data){
        $.each(deliver_celeb_items, function(i, el){
          $(this).find('.item-name').text(data[thisBtn][i].name)
          $(this).find('.item-price').text(`${data[thisBtn][i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`)
          $(this).attr("href", `#${data[thisBtn][i].name}`)   // TODO: 링크도 제이슨 파일에 넣고 변경
        })
      })
    })

});